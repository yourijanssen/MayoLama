import * as express from 'express';
import { Account } from '../models/changeAccount';

export function updateAccount(req: express.Request, res: express.Response): void {
    let account = new Account;
    account.updateAccount(req, res);
}

export function deleteAccount(req: express.Request, res: express.Response): void {
    let account = new Account;
    account.deleteAccount(req, res);
}

