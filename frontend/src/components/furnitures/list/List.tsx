import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Card from '../card/Card'
import Type from '../../../models/type/Type'
import Furniture from '../../../models/furniture/Furniture'
import typesServices from '../../../services/types'
import furnitureServices from '../../../services/furnitures'

export default function List(): JSX.Element {

    const [types, setTypes] = useState<Type[]>([])
    const [furnitures, setFurnitures] = useState<Furniture[]>([])

    useEffect(() => {
        (async () => {
            try {
                const types = await typesServices.getTypes()
                setTypes(types)

                const allFurniture = await furnitureServices.getTotal()
                setFurnitures(allFurniture)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    async function typeChanged(event: ChangeEvent<HTMLSelectElement>) {
        try {
            const selectedTypeId = event.currentTarget.value

            if (!selectedTypeId) {
                const allFurniture = await furnitureServices.getTotal()
                setFurnitures(allFurniture)
            } else {

                const furnitures = await furnitureServices.getFromTypes(selectedTypeId)
                setFurnitures(furnitures)
            }
        } catch (error) {
            alert(error)
        }

    }

    function removeFurniture(id: string) {
        setFurnitures(furnitures.filter(f => f.id !== id))
    }

    return (
        <div className='List'>
            <select onChange={typeChanged}>
                <option value="" disabled selected>Please select type...</option>
                {types.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </select>
            <div className='CardContainer'>
                {furnitures.map(furniture => <Card key={furniture.id} furniture={furniture} removeFurniture={removeFurniture} />)}
            </div>
        </div>
    )
}