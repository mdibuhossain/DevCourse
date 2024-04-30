import express from 'express';
import { WalletController } from '../controllers/wallet.controller';

const walletRouter = express.Router();

walletRouter.get('/:id', WalletController.getWallet);
walletRouter.put('/:id', WalletController.updateWallet);
walletRouter.put('/:id/cash-in', WalletController.cashIn);
walletRouter.put('/:id/cash-out', WalletController.cashOut);

export default walletRouter;