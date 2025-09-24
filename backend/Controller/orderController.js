import Order from "../Models/orderModel.js";

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const { status, date } = req.query;
    
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      
      query.createdAt = {
        $gte: startDate,
        $lte: endDate
      };
    }
    
    const orders = await Order.find(query).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new order (snapshot product details)
export const createOrder = async (req, res) => {
  try {
    const { items, total, customer, shipping, payment } = req.body;

    const enrichedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(400).json({ message: `Product not found: ${item.product}` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }

      product.stock -= item.quantity;
      await product.save();

      enrichedItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.image // ✅ snapshot saved in order
      });
    }

    const order = new Order({
      items: enrichedItems,
      total,
      customer,
      shipping,
      payment,
      status: "Pending"
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("items.product", "name price image");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Refund an order
export const refundOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.status !== "Completed") {
      return res.status(400).json({ message: "Only completed orders can be refunded" });
    }

    order.status = "Refunded";
    await order.save();

    // Restock products
    for (const item of order.items) {
      const product = await Product.findById(item.product);
      if (product) {
        product.stock += item.quantity;
        await product.save();
      }
    }

    res.json({ message: "Order refunded successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body; // e.g. Pending, Completed, Shipped, Cancelled
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};