import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  // Register a new user in the database
  res.send({'message': 'Sign Up'})
});

authRouter.post("/sign-in", (req, res) => {
    // Register a new user in the database
    res.send({'message': 'Sign In'})
});

authRouter.post("/sign-out", (req, res) => {
    // Register a new user in the database
    res.send({'message': 'Sign Out'})
});

export default authRouter;