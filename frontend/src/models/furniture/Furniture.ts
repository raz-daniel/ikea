import Draft from "./Draft";

export default interface Furniture extends Draft {
    id: string
    createdAt: Date
    updatedAt: Date
}