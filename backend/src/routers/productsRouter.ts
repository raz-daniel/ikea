import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/param-validation";
import { deleteProductValidator, GetProductsPerCategoryValidator, newProductValidator } from "../controllers/products/validator";
import { addProduct, getProductPerCategory, removeProduct } from "../controllers/products/controller";


const productRouter = Router()

productRouter.get('/:categoryId', paramsValidation(GetProductsPerCategoryValidator), getProductPerCategory)
productRouter.post('/', validation(newProductValidator), addProduct)
productRouter.delete('/:id', paramsValidation(deleteProductValidator), removeProduct)

export default productRouter