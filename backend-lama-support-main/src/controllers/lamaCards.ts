import * as express from 'express';
import { lamaCard } from '../models/lamaCards';

export function getLamaSummary(req: express.Request, res: express.Response): void {
    let lamaInfo = new lamaCard;
    lamaInfo.getLamaSummary(req, res);
}

export function getLamaSummaryFromSeller(req: express.Request, res: express.Response): void {
    let lamaInfo = new lamaCard;
    lamaInfo.getLamaSummaryFromSeller(req, res);
}
