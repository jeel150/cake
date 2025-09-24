
import express from "express";
const router = express.Router();
import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../Controller/courseController.js';

// Remove upload.single('image') middleware
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse); // No file upload middleware
router.put('/:id', updateCourse); // No file upload middleware
router.delete('/:id', deleteCourse);

export default router;