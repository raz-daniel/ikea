import { NextFunction, Response, Request } from "express";
import Type from "../../model/type";


export async function getTypes(req: Request, res: Response, next: NextFunction) {
    try {
        const types = await Type.findAll()
        res.json(types)
    } catch (error) {
        next(error)
    }
}

