/** @author Madelief van Slooten */

import * as express from 'express';
import { pool } from "../Util/database";
import { saveSubscription } from "../controllers/addLama";

export class Lama {

     /**
     * Gets lama by given lama id.
     * @param req Request
     * @param res Response
     * @returns Response with lama information
     */
     public async getLama(req: express.Request, res: express.Response): Promise<any> {
        const [lama,] = await pool.promise().query(`SELECT * FROM MayoLama.lama_info WHERE lamaID = ?`, [req.body.lamaID]);
        return lama;
    }


    /**
     * Updates the lama info that is changed.
     * @param req Request
     * @param res Response
     */
    public updateLama(req: express.Request, res: express.Response): void {
        pool.query(
            "UPDATE MayoLama.lama_info SET name = ?, age = ?, gender = ?, biotext = ?  WHERE lamaID = ?",
            [req.body.lamaname, req.body.lamaage, req.body.lamagender, req.body.lamatext, req.body.lamaID],
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
                    res.end();
                } else {
                    console.log('lama updated');
                }
            }
        );
    }

    /**
     * Deletes a lama from database by given id // uitzoeken hoe je weet of er is gedelete.
     * @param req Request
     * @param res Response
     */
    public deleteLama(req: express.Request, res: express.Response): void {
        pool.query(`DELETE FROM MayoLama.lama_info WHERE lamaID = ?`, [req.body.lamaID], function (err, result) {
            if (err) {
                console.log(err);
                res.status(404).json(
                    'error'
                );
            } else {
                console.log('lama deleted');
                res.status(200).json(
                    result
                );
            }
        });
    }

    /**
     * Saves a new lama
     * @param req Request
     * @param res Response
     */
    public async saveLama(req: express.Request, res: express.Response): Promise<void> {
        pool.query(`INSERT INTO MayoLama.lama_info (name, age, gender, biotext, userID) VALUES (?, ?, ?, ?, ?)`,
            [req.body.lamaname, req.body.lamaage, req.body.lamagender, req.body.lamatext, req.body.userid], function (err, result) {
                if (err) {
                    console.log(err);
                    console.log('error');
                } else {
                    console.log('data inserted');
                    saveSubscription(req, res);
                }
            });
    }

}