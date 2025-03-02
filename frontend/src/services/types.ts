import axios from "axios"
import Type from "../models/type/Type"

class Types {
    async getTypes(): Promise<Type[]> {
        const response = await axios.get<Type[]>(`${import.meta.env.VITE_REST_SERVER_URL}/types`)
        return response.data
    }
}

const typesServices = new Types()
export default typesServices