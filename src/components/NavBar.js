import Product from './Product'


const NavBar = () => {
    return (
        <header className="header">
            <h1 className='pointer'>
                Tati's Shop
            </h1>
            <Product producto="Primero"/>
            <Product producto="Segundo"/>
            <Product producto="Tercero"/>
            <div className="iconoCarrito">
                <i className="fa-solid fa-cart-shopping pointer"></i>
                <p className="numeroCarrito">4</p>
            </div>
        </header> 
    )
}

export default NavBar




