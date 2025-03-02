import { Sequelize } from "sequelize-typescript";
import config from "config";
import Furniture from "../model/furniture";
import Type from "../model/type";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false


const sequelize = new Sequelize({
    models: [Furniture, Type],
    dialect: 'mysql',
    ...config.get('db'),
    logging
})

export default sequelize