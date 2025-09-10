import CourseApplication from '../Models/CourseApplication.js';

export async function createCourseApplication(req, res) {
  try {
    const application = new CourseApplication(req.body);
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getCourseApplications(req, res) {
  try {
    const applications = await CourseApplication.find().sort({ submissionDate: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}