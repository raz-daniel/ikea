import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(): JSX.Element {


    return (
        <div className='Header'>
            
            <div>
                <nav>
                    <NavLink to="furniture">Furniture List</NavLink>
                    <NavLink to="add-furniture">Add Furniture</NavLink>
                </nav>
            </div>

        </div>
    )
}