import { useForm } from 'react-hook-form'
import './Add.css'
import Draft from '../../../models/furniture/Draft'
import furnitureServices from '../../../services/furnitures'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Type from '../../../models/type/Type'
import typesServices from '../../../services/types'


export default function AddFurniture(): JSX.Element {
    const [types, setTypes] = useState<Type[]>([])

    useEffect(() => {
        (async () => {
            try {
                const types = await typesServices.getTypes()
                setTypes(types)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            await furnitureServices.addFurniture(draft)
            alert(`Furniture Added`)
            navigate('/furniture')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='AddFurniture'>
            <form onSubmit={handleSubmit(submit)}>

                <select defaultValue={''}{...register('typeId', {
                    required: {
                        value: true,
                        message: 'must select type'
                    }
                })}>
                    <option value="" disabled selected>Please select category...</option>
                    {types.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.typeId?.message}</span>

                <input placeholder='furniture color' {...register('color', {
                    required: {
                        value: true,
                        message: 'must enter color'
                    }
                })} />
                <span className='error'>{formState.errors.color?.message}</span>


                <input type="number" placeholder='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'must enter price'
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <input placeholder='dimensions' {...register('dimensions', {
                    required: {
                        value: true,
                        message: 'must enter dimensions'
                    }
                })} />
                <span className='error'>{formState.errors.dimensions?.message}</span>

                <button>Add Product</button>
            </form>
        </div>
    )
}