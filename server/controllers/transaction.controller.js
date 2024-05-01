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
            let finalPrice = findCourse.price;
            let transaction = null;
            if (payload.couponCode) {
                const findCoupon = await prisma.coupon.findUnique({
                    where: { code: payload.couponCode },
                    include: {
                        id: true,
                        balance: true,
                        discount: true,
                        expiryDate: true,
                        user: {
                            include: {
                                wallet: true,
                            },
                        },
                    }
                });
                let discountAmount = findCoupon.discount / 100 * findCourse.price;
                finalPrice -= discountAmount;
                if (findCoupon.expiryDate < new Date()) {
                    return res.status(400).json({ message: 'Coupon has expired' });
                }
                if (findWallet.balance < finalPrice) {
                    return res.status(400).json({ message: 'Insufficient balance' });
                }
                await prisma.coupon.update({
                    where: {
                        id: findCoupon.id,
                    },
                    data: {
                        count: {
                            increment: 1,
                        },
                    },
                });
                await prisma.wallet.update({
                    where: {
                        id: findCoupon.user.wallet.id,
                    },
                    data: {
                        balance: {
                            increment: discountAmount,
                        },
                    },
                });
                transaction = await prisma.transaction.create({
                    data: {
                        courseId: findCourse.id,
                        walletId: findWallet.id,
                        couponId: findCoupon.id,
                        amount: finalPrice,
                    },
                    include: {
                        id: true,
                        coupon: true,
                        course: true,
                        wallet: true,
                        amount: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                });
            } else {
                transaction = await prisma.transaction.create({
                    data: {
                        courseId: findCourse.id,
                        walletId: findWallet.id,
                        amount: finalPrice,
                    },
                    include: {
                        id: true,
                        course: true,
                        wallet: true,
                        amount: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                });
            }
            await prisma.wallet.update({
                where: {
                    id: findWallet.id,
                },
                data: {
                    balance: {
                        decrement: finalPrice,
                    },
                },
            });
            return res.status(201).json(transaction);
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