import { Router } from 'express';
import UserRouter from './users';
import KcalRouter from './kcals';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/kcals', KcalRouter);

// Export the base-router
export default router;
