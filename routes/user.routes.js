import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
    res.send({'message': 'Create new User'});
});

userRouter.put('/:id', (req, res) => {
    res.send({'message': 'UPDATE User'});
});

userRouter.delete('/:id', (req, res) => {
    res.send({'message': 'Delete User'});
});

export default userRouter;