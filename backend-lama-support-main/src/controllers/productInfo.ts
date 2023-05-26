import * as express from 'express';
import { Product } from '../models/productInfo';

export function getLamaInfo(req: express.Request, res: express.Response): void{
    let product = new Product;
    product.getLamaInfo(req, res);
} 

export function getLamaPictures(req: express.Request, res: express.Response): void{
    let product = new Product;
    product.getLamaPictures(req, res);
}