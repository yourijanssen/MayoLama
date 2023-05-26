/** @author Madelief van Slooten */

import * as express from 'express';
import { Lama } from "../models/changeLama";
import { subscriptionProduct } from "../models/saveSubscription";

/**
 * Saves a lama object
 * @param req Request
 * @param res Response
 */
export async function addLamaProduct(req: express.Request, res: express.Response): Promise<void> {
    let lamaProduct: Lama = new Lama();
    lamaProduct.saveLama(req, res);
}

/**
 * Calls save subscription. I had an idea to make the query more variable, but for some reason it then only saves 1 subscription,
 * so for now it will be a little ugly with three queries that do the same thing. This will be solved later.
 * @param req Request
 * @param res Response
 */
export async function saveSubscription(req: express.Request, res: express.Response): Promise<void> {
    let subscription: subscriptionProduct = new subscriptionProduct();
    subscription.saveSubscriptionsAndImages(req, res);
}