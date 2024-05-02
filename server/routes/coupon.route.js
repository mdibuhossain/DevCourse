import express from 'express';
import { CouponController } from '../controllers/coupon.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const couponRouter = express.Router();

couponRouter.get('/:id', authMiddleware, CouponController.getCoupon);
couponRouter.post('/', authMiddleware, CouponController.createCoupon);
couponRouter.put('/:id', authMiddleware, CouponController.updateCoupon);
couponRouter.delete('/:id', authMiddleware, CouponController.deleteCoupon);
couponRouter.get('/check', authMiddleware, CouponController.checkValidCoupon);

export default couponRouter;