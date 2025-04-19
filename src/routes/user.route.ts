import { Router } from 'express';
import { User } from '../models/user.model';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export default router;
