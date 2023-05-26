import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from 'qs';
import { support } from "../models/supportLama";



export async function lamaSupport(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>){
    let supportLama: any = new support();
    supportLama(req, res);
}
