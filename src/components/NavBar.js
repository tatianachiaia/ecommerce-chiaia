import Product from './Product'
import Icono from './CartWidget'


const NavBar = () => {
    return (
        <header className="header">
            <h1 className='pointer'>
                Tati's Shop
            </h1>
            <Product producto="Primero"/>
            <Product producto="Segundo"/>
            <Product producto="Tercero"/>
            <Icono/>
        </header> 
    )
}

export default NavBar




