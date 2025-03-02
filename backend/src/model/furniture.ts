import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Type from "./type";

@Table({
    underscored: true
})
export default class Furniture extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column
    dimensions: string

    @AllowNull(false)
    @Column(DataType.DATE)
    color: string

    @AllowNull(false)
    @Column(DataType.DECIMAL)
    price: number

    @ForeignKey(() => Type)
    @Column(DataType.UUID)
    typeId: string
    
    @BelongsTo(() => Type)
    type: Type

}