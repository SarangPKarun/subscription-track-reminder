import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({'message': 'GET all Users'});
});

userRouter.get('/:id', (req, res) => {
    res.send({'message': 'GET user details'});
});

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