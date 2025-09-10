import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './Routes/productRoutes.js';
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import orderRoutes from './Routes/orderRoutes.js';
import courseRoutes from './Routes/courseRoutes.js';
import courseApplicationsRouter from './Routes/courseApplications.js';
import pagesApi from "./pagesApi.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import uploadRoutes from "./Routes/uploadRoutes.js";
import themesRoutes from "./Routes/themesRoutes.js"





dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/course-applications', courseApplicationsRouter);
app.use("/api/pages", pagesApi);
app.use("/api/categories", categoryRoutes);
app.use("/api/upload", uploadRoutes); 
app.use("/api/themes",themesRoutes);






// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
