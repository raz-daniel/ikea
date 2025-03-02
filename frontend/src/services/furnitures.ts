import axios from "axios"
import Furniture from "../models/furniture/Furniture"
import Draft from "../models/furniture/Draft"

class Furnitures {

    async getTotal(): Promise<Furniture[]> {
        const response = await axios.get<Furniture[]>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture`)
        return response.data
    }

    async getFromTypes(categoryId: string): Promise<Furniture[]> {
        const response = await axios.get<Furniture[]>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture/${categoryId}`)
        return response.data
    }

    async addFurniture(draft: Draft): Promise<Furniture> {
        const response = await axios.post<Furniture>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture`, draft)
        return response.data
    }

    async deleteFurniture(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture/${id}`)
        return response.data
    }

}

const furnitureServices = new Furnitures()
export default furnitureServices