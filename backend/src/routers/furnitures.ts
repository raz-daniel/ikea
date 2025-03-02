import { Router } from "express";
import validation from "../middlewares/validation";
import { addFurnitureValidator, deleteFurnitureValidator, GetFurnitureFromTypeValidator } from "../controllers/furnitures/validator";
import { addFurniture, deleteFurniture, getAllFromType, getTotalFurnitures } from "../controllers/furnitures/controller";
import paramsValidation from "../middlewares/param-validation";

const router = Router()

router.get('/', getTotalFurnitures)
router.get('/:typeId', paramsValidation(GetFurnitureFromTypeValidator), getAllFromType)
router.post('/', validation(addFurnitureValidator), addFurniture)
router.delete('/:id', paramsValidation(deleteFurnitureValidator), deleteFurniture)

export default router