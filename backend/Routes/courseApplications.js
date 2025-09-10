import { Router } from 'express';
const router = Router();
import { createCourseApplication, getCourseApplications } from '../Controller/courseApplicationController.js';

router.post('/', createCourseApplication);
router.get('/', getCourseApplications);

export default router;