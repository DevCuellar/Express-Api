import {Request, Response} from 'express';
import productService from '../services/productService';
import { sendError, sendSuccess } from '../utils/requestHandlers';

class ProductController{

    async getAllProducts(req: Request, res: Response){
        try{
            const products = await productService.getAllProducts();
            sendSuccess(res, products);
        }catch(error: any){
            sendError(res, error.message);
        }
    }

    async getProductById(req: Request, res: Response){
        try{
            const id = Number(req.params['id']);
            const product = await productService.getProductById(id);
            if(product){
                sendSuccess(res, product);
            }else{
                sendError(res, `Product not found`, 404);
            }
        }catch(error: any){
            sendError(res, error.message);
        }
    }

    async postProduct(req: Request, res: Response){
        try{
            const data = req.body;
            const product = await productService.postProduct(data);
            if(product){
                sendSuccess(res, product);
            }else{
                sendError(res, `Product not created`, 500);
            }
        }catch(error: any){
            sendError(res, error.message);
        }
    }

    async putProduct(req: Request, res: Response){
        try{
            const id = Number(req.params['id']);
            const data = req.body;
            const product = await productService.putProduct(data, id);
            if(product){
                sendSuccess(res, product);
            }else{
                sendError(res, `Product not found`, 404);
            }
        }catch(error: any){
            sendError(res, error.message);
        }
    }

    async deleteProduct(req: Request, res: Response){
        try{
            const id = Number(req.params['id']);
            const deleted = await productService.deleteProduct(id);
            if(deleted){
                sendSuccess(res, {});
            }else{
                sendError(res, `Product not found`, 404);
            }
        }catch(error: any){
            sendError(res, error.message);
        }
    }

}

export default new ProductController();