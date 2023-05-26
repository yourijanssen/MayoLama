import { Request, Response } from "express-serve-static-core";
import { pool } from "../Util/database";
import { ParsedQs } from "qs";


export class support {
  public support(
    req: Request<{}, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>, number>
  ) {
    pool.query(
      `INSERT INTO MayoLama.user_sub (userID, subID)VALUES (?, ?) `,
      [req.body.userId, req.body.subId],
      function (err, result) {
        if (err) {
          console.log(err);
          console.log("error");
        } else {
          console.log("data inserted");
          res.end();
        }
      }
    );
  }
}
