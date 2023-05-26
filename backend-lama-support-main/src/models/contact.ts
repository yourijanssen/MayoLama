import * as express from 'express';
import { pool } from "../Util/database";

/**
 * @author Youri Janssen
 *  This function is used to save contact data into the database.
 * @param req The request objects are name, email, subject and message.
 * @param res Data from the database.
 */
export async function contact(req: express.Request, res: express.Response): Promise<any> {
	pool.query(`INSERT INTO MayoLama.contact (name, email, subject, message) VALUES (?, ?, ?, ?)`,
		[req.body.name, req.body.email, req.body.subject, req.body.message], function (err, result) {
			if (err) {
				console.log(err);
				console.log('error');
			} else {
				console.log('data inserted');
				res.status(200).json(
					JSON.stringify('results')
				);
			}
		});
}