
import Icono from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="header">
            <Link to='/' className="navBar"><h2>Tati's Shop</h2></Link>
            <Link to='/category/dishes' className="navBar"> Dishes</Link>
            <Link to='/category/cooking' className="navBar"> Cooking</Link>
            <Link to='/category/machines' className="navBar"> Machines</Link>
            <Icono/>
        </header> 
    )
}

export default NavBar




