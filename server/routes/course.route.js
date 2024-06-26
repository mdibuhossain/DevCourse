import express from 'express';
import { CourseController } from '../controllers/course.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const courseRouter = express.Router();

courseRouter.get('/', CourseController.getAllCourses);
courseRouter.get('/:id', CourseController.getCourse);
courseRouter.post('/', authMiddleware, CourseController.createCourse);
courseRouter.put('/:id', authMiddleware, CourseController.updateCourse);
courseRouter.delete('/:id', authMiddleware, CourseController.deleteCourse);

export default courseRouter;