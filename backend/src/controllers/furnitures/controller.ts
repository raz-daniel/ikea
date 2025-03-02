import { NextFunction, Response, Request } from "express";
import Furniture from "../../model/furniture";
import Type from "../../model/type";

export function getTotalFurnitures(req: Request, res: Response, next: NextFunction) {

}

export async function getAllFromType(req: Request<{ typeId: string }>, res: Response, next: NextFunction) {
    try {
        const { typeId } = req.params
        const type = await Type.findByPk(typeId, {
            include: [Furniture]
        })
        res.json(type.furnitures)
    } catch (error) {
        next(error)
    }

}

export async function addFurniture(req: Request<{}, {}, {
    color: string,
    dimensions: string,
    typeId: string,
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newFurniture = await Furniture.create(req.body)
        res.json(newFurniture)
    } catch (error) {
        next(error)
    }


}

export async function deleteFurniture(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await Furniture.destroy({ where: { id } })
        res.json({ success: true })
    } catch (error) {
        next(error)
    }


}