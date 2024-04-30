import express from 'express';
import { CouponController } from '../controllers/coupon.controller';

const couponRouter = express.Router();

couponRouter.get('/:id', CouponController.getCoupon);
couponRouter.post('/', CouponController.createCoupon);
couponRouter.put('/:id', CouponController.updateCoupon);
couponRouter.delete('/:id', CouponController.deleteCoupon);

export default couponRouter;