import { NextFunction, Response, Request } from "express";
import Category from "../../model/category";
import Product from "../../model/product";


export async function getProductPerCategory(req: Request<{ categoryId: string }>, res: Response, next: NextFunction) {
    try {
        const { categoryId } = req.params
        const category = await Category.findByPk(categoryId, {
            include: [Product]
        })
        res.json(category.products)
    } catch (error) {
        next(error)
    }
}


export async function addProduct(req: Request<{}, {}, {
    name: string,
    productionTime: Date,
    expirationTime: Date,
    categoryId: string,
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        next(error)
    }
}

export async function removeProduct(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const {id} = req.params
        await Product.destroy({where: {id}})
        res.json({success: true})
    } catch (error) {
        next(error)
    }
}