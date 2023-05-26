/** @author Madelief van Slooten */

import * as express from 'express';
import { pool } from "../Util/database";


export class subscriptionProduct {

    /**
     * Gets the subscriptions from a given lama ID en returns them in the result.
     * @param req Request
     * @param res Response
     */
    public async getSubscriptions(req: express.Request): Promise<any> {
        const [subscriptions,] = await pool.promise().query(`SELECT * FROM MayoLama.subscription WHERE lamaID = ?`, [req.body.lamaID]);
        return subscriptions;
    }

    /**
     * Saves the subscriptions that are entered by user. This still needs to be shortened and made more variable.
     * Some solutions were tested but it didn't work yet.
     * @param req Request
     * @param res Response
     */
    public saveSubscriptionsAndImages(req: express.Request, res: express.Response): void {
        pool.query(`SELECT lamaID FROM MayoLama.lama_info WHERE name = ? AND biotext = ?`, [req.body.lamaname, req.body.lamatext], function (err, result) {
            if (err) {
                console.log(err);
                res.status(404).json(
                    'error'
                );
            } else {
                res.status(200).json(
                    result
                );
                for (let i = 0; i < 3; i++) {
                    pool.query(`INSERT INTO MayoLama.subscription (title, price, lamaID, benefits) VALUES (?, ?, ?, ?)`,
                        [returnSubscriptionArray(i, req)[0], returnSubscriptionArray(i, req)[1], JSON.parse(JSON.stringify(result))[0].lamaID, returnSubscriptionArray(i, req)[2]], function (err, result) {
                            if (err) {
                                console.log(err);
                                console.log('error');
                            } else {
                                console.log(`data subscription ${i} inserted`);
                            }
                        });
                }

                for (let i = 0; i <= req.body.imgArray.length; i++) {
                    let isProfile: string = '';
                    (i === 1) ? isProfile = '1' : isProfile = '0';
                    pool.query(`INSERT INTO MayoLama.lama_picture (lamaID, picture, isProfilePicture) VALUES (?, ?, ?)`,
                        [JSON.parse(JSON.stringify(result))[0].lamaID, `./assets/${extractImages(req, i)}`, isProfile], function (err, result) {
                            if (err) {
                                console.log(err);
                                console.log('error');
                            } else {
                                console.log(`picture ${i} inserted`);
                            }
                        });
                }

            }
        });
    }
    /**
     * Updates the subscription info. A solution still needs to be found to get the subscription ID's so the first sub doesn't 
     * overwrite all three subs. 
     * @param req Request
     * @param res Response
     */
    public updateSubscriptions(req: express.Request, subscriptionIDs: any): void {
        for (let i = 0; i < 3; i++) {
            pool.query(`UPDATE MayoLama.subscription SET title = ?, price = ?, benefits = ? WHERE subID = ?`,
                [returnSubscriptionArray(i, req)[0], returnSubscriptionArray(i, req)[1], returnSubscriptionArray(i, req)[2], subscriptionIDs[i].subID], function (err, result) {
                    if (err) {
                        console.log(err);
                        console.log('error');
                    } else {
                        console.log('data sub updated');
                    }
                });
        }
    }
}

/**
 * Gets the images from a give array that was taken form a file input.
 * @param req Request
 * @param i number
 * @returns Image name string
 */
function extractImages(req: express.Request, i: number): string {
    let imgName: string[] = req.body.imgArray
    return imgName[i];
}

/**
     * This function is now not used. It was made as an idea to make the subscription saving more variable, but it didn't work
     * A solution will be found with more time.
     * @param req Request
     * @param res Response
     */
function returnSubscriptionArray(subscriptionNumber: number, req: express.Request): any {
    if (subscriptionNumber === 0) {
        return [req.body.subscription0title, req.body.subscription0price, req.body.subscription0benefits];
    } else if (subscriptionNumber === 1) {
        return [req.body.subscription1title, req.body.subscription1price, req.body.subscription1benefits];
    } else if (subscriptionNumber === 2) {
        return [req.body.subscription2title, req.body.subscription2price, req.body.subscription2benefits];
    }
    return 'error';
}