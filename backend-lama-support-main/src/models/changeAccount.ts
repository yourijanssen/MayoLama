import * as express from 'express';
import { pool } from "../Util/database";

export class Account {

    public updateAccount(req: express.Request, res: express.Response): void {
        pool.query(
            "UPDATE MayoLama.user SET username = ?, mail = ?, password = ?, name = ?, bioText = ?  WHERE userID = ?", [req.body.username, req.body.mail, req.body.password, req.body.name, req.body.bioText, req.body.userID],
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
                    res.end();
                } else {
                    res.status(200).json(
                        results
                    );
                }
            }
        );
    }

    public deleteAccount(req: express.Request, res: express.Response): void {
        pool.query(
            "DELETE FROM MayoLama.user WHERE userID = ?", [req.body.userID],
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
                } else {
                    res.status(200).json(
                        results
                    );
                }
            }
        );
    }
}