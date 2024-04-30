export class CouponController {
    static async getCoupon(req, res) {
        try {
            const coupon = await prisma.coupon.findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(200).json(coupon);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async createCoupon(req, res) {
        const payload = req.body;
        try {
            const coupon = await prisma.coupon.create({
                data: {
                    code: payload.code,
                    discount: payload.discount,
                    expiryDate: payload.expiryDate,
                },
            });
            return res.status(201).json(coupon);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async updateCoupon(req, res) {
        const payload = req.body;
        try {
            const coupon = await prisma.coupon.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    code: payload.code,
                    discount: payload.discount,
                    expiryDate: payload.expiryDate,
                },
            });
            return res.status(200).json(coupon);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async deleteCoupon(req, res) {
        try {
            const coupon = await prisma.coupon.delete({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(200).json(coupon);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}