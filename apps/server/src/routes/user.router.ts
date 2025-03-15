import { Router } from 'express';

import {
  getQueryUsers,
  getUserById,
  createUser,
  updateUser,
} from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', getQueryUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);

export default userRouter;
