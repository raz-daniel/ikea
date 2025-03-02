import Joi from "joi";

export const addFurnitureValidator = Joi.object({
    color: Joi.string().max(255).required(),
    dimensions: Joi.string().required(),
    typeId: Joi.string().uuid().required(),
    price: Joi.number().min(0).required()
})

export const GetFurnitureFromTypeValidator = Joi.object({
    typeId: Joi.string().uuid().required()
})

export const deleteFurnitureValidator = Joi.object({
    id: Joi.string().uuid().required()
})