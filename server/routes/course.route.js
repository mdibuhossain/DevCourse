import express from 'express';
import { CourseController } from '../controllers/course.controller';

const courseRouter = express.Router();

courseRouter.get('/', CourseController.getAllCourses);
courseRouter.get('/:id', CourseController.getCourse);
courseRouter.post('/', CourseController.createCourse);
courseRouter.put('/:id', CourseController.updateCourse);
courseRouter.delete('/:id', CourseController.deleteCourse);

export default courseRouter;