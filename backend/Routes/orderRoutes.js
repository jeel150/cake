import express from "express";
import { 
  getOrders,
  createOrder,
  getOrderById, 
  updateOrderStatus,
  refundOrder,
} from "../Controller/orderController.js";

const router = express.Router();

router.route('/')
  .get(getOrders)
  .post(createOrder);
  
router.route('/:id')
  .get(getOrderById);

router.route('/:id/status')
  .put(updateOrderStatus);

router.route('/:id/refund')
  .post(refundOrder);


export default router;
