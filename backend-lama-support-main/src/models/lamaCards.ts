import * as express from 'express';
import { pool } from "../Util/database";

export class lamaCard {
    public getLamaSummary(req: express.Request, res: express.Response) {
        pool.query(
            "SELECT DISTINCT Lama_Info.lamaID, Lama_Info.name, Lama_Info.age, Lama_Info.gender, Lama_Picture.picture FROM mayoLama.Lama_Info join Lama_Picture on Lama_Info.lamaID = Lama_Picture.lamaID WHERE Lama_Picture.isProfilePicture = '1';",
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
                }
                else {
                    res.status(200).json(
                        JSON.stringify(results)
                    );
                }
            }
        );
    }

    public getLamaSummaryFromSeller(req: express.Request, res: express.Response) {
        pool.query(
            "SELECT DISTINCT Lama_Info.userID, Lama_Info.lamaID, Lama_Info.name, Lama_Info.age, Lama_Info.gender, Lama_Picture.picture FROM mayoLama.Lama_Info" + 
            " join Lama_Picture on Lama_Info.lamaID = Lama_Picture.lamaID WHERE Lama_Info.userID = ? and Lama_Picture.isProfilePicture = '1'", req.query.userID,
            function (err, results, fields) {
                if (err != null) {
                    console.log(err);
                    res.status(404);
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