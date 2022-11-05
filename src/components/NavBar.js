import Category from './Category'
import Icono from './CartWidget'


const NavBar = () => {
    return (
        <header className="header">
            <h1 className='pointer'>
                Tati's Shop
            </h1>
            <Category category="Primero"/>
            <Category category="Segundo"/>
            <Category category="Tercero"/>
            <Icono/>
        </header> 
    )
}

export default NavBar




