import Furniture from '../../../models/furniture/Furniture'
import furnitureServices from '../../../services/furnitures'
import './Card.css'

interface CardProps {
    furniture: Furniture
    typeName: string
    removeFurniture(id: string): void
}

export default function Card(props: CardProps): JSX.Element {

    const { id, color, price, dimensions } = props.furniture
    const { typeName } = props

    async function deleteMe() {
        try {
            await furnitureServices.deleteFurniture(id)
            props.removeFurniture(id)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='Card'>
            <h4>name: {typeName}</h4>
            <p>dimensions: {dimensions}</p>
            <p>price: {price}</p>
            <p>color: {color}</p>
            <div>
                <button onClick={deleteMe}>delete</button>
            </div>
        </div>

    )
}