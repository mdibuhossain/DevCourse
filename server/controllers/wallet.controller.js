export class WalletController {
    static async getWallet(req, res) {
        try {
            const wallet = await prisma.wallet.findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(200).json(wallet);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async updateWallet(req, res) {
        const payload = req.body;
        try {
            const wallet = await prisma.wallet.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    balance: payload.balance,
                },
            });
            return res.status(200).json(wallet);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async cashIn(req, res) {
        const payload = req.body;
        try {
            const wallet = await prisma.wallet.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    balance: {
                        increment: payload.amount,
                    },
                },
            });
            return res.status(200).json(wallet);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async cashOut(req, res) {
        const payload = req.body;
        try {
            const wallet = await prisma.wallet.findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            if (wallet.balance < payload.amount) {
                return res.status(400).json({ message: 'Insufficient balance' });
            }
            const updatedWallet = await prisma.wallet.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    balance: {
                        decrement: payload.amount,
                    },
                },
            });
            return res.status(200).json(wallet);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}