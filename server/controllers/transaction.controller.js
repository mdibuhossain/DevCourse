export class TransactionController {
    static async getTransaction(req, res) {
        try {
            const transaction = await prisma.transaction.findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(200).json(transaction);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async createTransaction(req, res) {
        const payload = req.body;
        try {
            const findCourse = await prisma.course.findUnique({
                where: {
                    id: payload.courseId,
                },
            });
            const findWallet = await prisma.wallet.findUnique({
                where: {
                    id: res.user.walletId,
                },
            });
            if (payload.courseId) {
                const findCoupon = await prisma.coupon.findUnique({
                    where: {
                        code: payload.couponId,
                    },
                });
            }
            const transaction = await prisma.transaction.create({
                data: {
                    amount: payload.amount,
                    type: payload.type,
                    walletId: payload.walletId,
                },
            });
            return res.status(201).json(transaction);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async updateTransaction(req, res) {
        const payload = req.body;
        try {
            const transaction = await prisma.transaction.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    amount: payload.amount,
                    type: payload.type,
                    walletId: payload.walletId,
                },
            });
            return res.status(200).json(transaction);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async deleteTransaction(req, res) {
        try {
            await prisma.transaction.delete({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}