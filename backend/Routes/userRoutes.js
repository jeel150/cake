import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  toggleUser,
   toggleCoAdmin 
} from "../Controller/userController.js";

const router = express.Router();

router.get("/", getUsers);             // GET all users
router.post("/", createUser);          // POST create user
router.put("/:id", updateUser);        // PUT update user
router.patch("/:id/toggle", toggleUser); // PATCH block/unblock
router.patch("/:id/toggle-coadmin", toggleCoAdmin);
export default router;
