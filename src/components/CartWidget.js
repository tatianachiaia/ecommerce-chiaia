import {Link} from 'react-router-dom'
import { useContext} from 'react';
import { CartContext } from './CartContext';

const Icono = () => {
    const test = useContext(CartContext)
    return (

        <Link to='/cart' className="navBar"> 
        <div className="iconoCarrito">
            <i className="fa-solid fa-cart-shopping pointer"></i>
            <p className="numeroCarrito">{test.calcItemsQty()}</p>
        </div>  
        </Link>
        
        
    )
} 

export default Icono
    
   