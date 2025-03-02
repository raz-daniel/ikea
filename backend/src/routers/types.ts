import { Router } from "express";
import { getTypes } from "../controllers/types/controller";

const router = Router()

router.get('/', getTypes)

export default router