import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.id
            ? 
            <div className="detailContainer"> 
                <img className="detailImage" src={item.thumbnail} alt="Same alt value">
                </img>
                <div className="detailText">
                   <h1>{item.title}</h1> 
                    <p className="detailDescription">{item.description}</p>
                    <p className="detailPrice">${item.price}</p>
                    <p>{item.stock} unidades en stock </p>
                </div>
                <div className='itemCount'>
                {
                itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <Link to='/cart'> <button> CheckOut </button> </Link>
                }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}


export default ItemDetail;