// controllers/courseController.js
import Course from '../Models/courseModel.js';

// Get all courses
export async function getAllCourses(req, res) {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get course by ID
export async function getCourseById(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Create new course - simplified version
export async function createCourse(req, res) {
  try {
    if (!req.body.image) {
      return res.status(400).json({ message: 'Image URL is required' });
    }

    const course = new Course({
      title: req.body.title,
      description: req.body.description,
      buttonText: req.body.buttonText,
      image: req.body.image,
      label: req.body.label,
      days: req.body.days,
      category: req.body.category,
      cloudinaryId: '' // Set empty since we're using external URLs
    });

    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update course - simplified version
export async function updateCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Update fields
    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    course.buttonText = req.body.buttonText || course.buttonText;
    course.image = req.body.image || course.image;
    course.label = req.body.label || course.label;
    course.days = req.body.days || course.days;
    course.category = req.body.category || course.category;

    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
// Delete course
export async function deleteCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Delete image from Cloudinary if exists
    if (course.cloudinaryId) {
      await uploader.destroy(course.cloudinaryId);
    }

    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}