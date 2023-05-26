import { Request, Response } from "express-serve-static-core";
import { pool } from "../Util/database";
import { ParsedQs } from 'qs';

/**
 * @author Madelief van Slooten
 * Queries. These sit in a function so an await can be used. This fixes the status problem.
 * @param req request
 * @param res response
 */
export async function register(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
	pool.query(`SELECT * FROM MayoLama.user WHERE username = ? OR mail = ?`, [req.body.username, req.body.email], function (err, result) {
		if (err) {
			console.log(err);
			res.status(404).json(
				'error'
			);
		};
		if (Object.keys(result).length > 0) {
			console.log('Register Failed! Try Again');
			res.status(404).json(
				'failed'
			);
		} else {
			pool.query(`INSERT INTO MayoLama.user (username, mail, password, role) VALUES (?, ?, ?, ?)`,
				[req.body.username, req.body.email, req.body.password, req.body.isSeller], function (err, result) {
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
	});
}