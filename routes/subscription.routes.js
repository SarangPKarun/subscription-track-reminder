import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({'message': 'GET all subscriptions'});
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({'message': 'GET subscription details'});
});

subscriptionRouter.post('/', authorize,  createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({'message': 'UPDATE subscription'});
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({'message': 'Delete subscription'});
});

subscriptionRouter.get('/user/:id', authorize, getSubscription);

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({'message': 'CANCEL subscription'});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({'message': 'GET upcoming renewals'});
});

export default subscriptionRouter;