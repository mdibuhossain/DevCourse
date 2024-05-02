import express from 'express';
import { WalletController } from '../controllers/wallet.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const walletRouter = express.Router();

walletRouter.get('/:id', authMiddleware, WalletController.getWallet);
walletRouter.put('/:id', authMiddleware, WalletController.updateWallet);
walletRouter.put('/:id/cash-in', authMiddleware, WalletController.cashIn);
walletRouter.put('/:id/cash-out', authMiddleware, WalletController.cashOut);

export default walletRouter;