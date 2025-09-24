import User from "../Models/User.js";

// ✅ Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// ✅ Create user (Admin only)
export const createUser = async (req, res) => {
  try {
    const { name, email, phone, status } = req.body;
    const user = new User({ name, email, phone, status });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error creating user" });
  }
};

// ✅ Update user
export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
};

// ✅ Toggle block/unblock
export const toggleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.status = user.status === "active" ? "blocked" : "active";
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error toggling user" });
  }
};

// Controller/userController.js - Add this function
export const toggleCoAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
 user.isCoAdmin = !user.isCoAdmin;
    await user.save();

    res.json({
      message: `Co-admin access ${user.isCoAdmin ? 'granted' : 'revoked'} successfully`,
      user
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating co-admin status" });
  }
};
