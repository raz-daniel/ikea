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
                const typesData = await typesServices.getTypes()
                console.log("Loaded types:", typesData);
                setTypes(typesData)


            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const totalFurniture = await furnitureServices.getTotal()
                console.log("Loaded furniture:", totalFurniture);
                // const totalFlatterd = totalFurniture.reduce((cum, cur) => {
                    
                // }, [])
                setFurnitures(totalFurniture)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    function getTypeName(typeId: string): string {
        console.log("Looking for typeId:", typeId);
        console.log("Available types:", types);
        const foundType = types.find(type => type.id === typeId)
        console.log("Found type:", foundType);
        return foundType ? foundType.name : 'unknown'
    }

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
            <select defaultValue="" onChange={typeChanged}>
                <option value="" disabled>Please select type...</option>
                {types.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </select>
            <div className='CardContainer'>
                {types.length > 0 && furnitures.map(furniture =>
                    <Card
                        key={furniture.id}
                        furniture={furniture}
                        typeName={getTypeName(furniture.typeId)}
                        removeFurniture={removeFurniture}
                    />
                )}
            </div>
        </div>
    )
}