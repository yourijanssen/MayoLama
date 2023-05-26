import * as express from 'express';
import { pool } from "../Util/database";


export class Product{
    public getLamaInfo(req: express.Request, res: express.Response): void{
        pool.query(
            "SELECT * FROM MayoLama.Lama_Info WHERE lamaID = ?", [req.query.lamaID],
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);    
                } 
                else if(Object.keys(results).length < 1){
                    res.status(404);
                    res.end();
                }
                else {
                    res.status(200).json(
                        JSON.stringify(results)
                    );
                }
            }
        );
    }

    public getLamaPictures(req: express.Request, res: express.Response): void{
        pool.query(
            "SELECT * FROM MayoLama.Lama_Picture WHERE lamaID = ?", [req.query.lamaID],
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
                }
                else if(Object.keys(results).length < 1){
                    res.status(404);
                    res.end();
                } 
                else {
                    res.status(200).json(
                        JSON.stringify(results)
                    );
                }
            }
        );
    }

    public getSubscriptionInfo(req: express.Request, res: express.Response): void{
        pool.query(
            "SELECT * FROM MayoLama.subscription WHERE lamaID = ?", [req.query.lamaID],
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
                }
                else if(Object.keys(results).length < 1){
                    res.status(404);
                    res.end();
                } 
                else {
                    res.status(200).json(
                        JSON.stringify(results)
                    );
                }
            }
        );
    }
}