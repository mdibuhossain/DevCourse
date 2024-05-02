import express from 'express';
import { TransactionController } from '../controllers/transaction.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const transactionRouter = express.Router();

transactionRouter.get('/:id', authMiddleware, TransactionController.getTransaction);
transactionRouter.post('/', authMiddleware, TransactionController.createTransaction);
transactionRouter.delete('/:id', authMiddleware, TransactionController.deleteTransaction);

export default transactionRouter;