/** @author Madelief van Slooten */


import * as express from 'express';
import { Lama } from "../models/changeLama";
import { subscriptionProduct } from "../models/saveSubscription";



/**
 * Gets lama info from database
 * @param req Request
 * @param res Response
 */
export async function getLama(req: express.Request, res: express.Response): Promise<void>{
    let lama: Lama = new Lama;
    let lamaResult = await lama.getLama(req, res);
    res.status(200).json(
        lamaResult
    );
}

/**
 * Creates a new lama to run query that saves lama.
 * @param req Request
 * @param res Response
 */
export async function editLama(req: express.Request, res: express.Response): Promise<void>{
    let lama: Lama = new Lama;
    lama.updateLama(req, res);
    
    let subscription: subscriptionProduct = new subscriptionProduct();
    let subscriptionIDs = await subscription.getSubscriptions(req);

    subscription.updateSubscriptions(req, subscriptionIDs);

    res.status(200).json(
        subscriptionIDs
    );
}

/**
 * Creates a new subscription object to get subscriptions from database.
 * @param req Request
 * @param res Response
 */
export async function getSubscriptions(req: express.Request, res: express.Response): Promise<void> {
    let subscription: subscriptionProduct = new subscriptionProduct();
    let result = await subscription.getSubscriptions(req);
    res.status(200).json(
        result
    );
}

/**
 * Deletes given lama
 * @param req Request
 * @param res Response
 */
export async function deleteLama(req: express.Request, res: express.Response): Promise<void>{
    let lama = new Lama;
    lama.deleteLama(req, res);
}