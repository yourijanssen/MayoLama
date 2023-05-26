import * as express from 'express';
import { pool } from '../Util/database';

/**
 * @author Youri Janssen
 *  This function is used to save review data into the database.
 * @param req The request objects are name, title, rating and experience.
 * @param res Status 200 if database has updated. Status 404 when an error occurred.
 */
export async function reviewPost(req: express.Request, res: express.Response) {
	pool.query(`INSERT INTO MayoLama.review (name, title, rating, experience, lamaID) VALUES (?, ?, ?, ?, ?)`,
		[req.body.name, req.body.title, req.body.rating, req.body.experience, req.body.lamaID], function (err: any, result: any) {
			if (err) {
				console.log(err);
				console.log('error');
			} else {
				console.log('review data inserted');
				res.status(200).json({});
			}
		});
}

/**
 * @author Youri Janssen
 *  This function is used to request the posted objects from the database.
 * @param req The request objects are name, title, rating and experience.
 * @param res Status 200 if database has updated. Status 404 when an error occurred.
 */
export async function reviewRead(req: express.Request, res: express.Response) {
	pool.query(`SELECT * FROM MayoLama.review WHERE lamaID = ?`,
		[req.body.lamaID], function (err: any, result: any) {
			if (err) {
				console.log(err);
				console.log('error');
			} else {
				console.log('review data retrieved');
				res.status(200).json(
					result
				);
			}
		})
}