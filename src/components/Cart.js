
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import FormatNumber from "../utils/FormatNumber";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from '../utils/firebase'


const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            title: item.titleItem,
            price: item.priceItem,
            qty: item.qtyItem
          }));
      
          test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });

        let order = {
            buyer: {
                name: 'Juan Perez',
                email: 'juanperez@gmail.com',
                phone: '123456789' 
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: test.calcTotal()
        } 
        console.log(order)

        const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
    }
    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));

    test.removeList();
    }

    return (
        <>
            <h1 className='cart-title'> YOUR CART</h1>
            <div className='cart-top'>
                <Link to='/'> <button className='cart-button' >CONTINUE SHOPPING</button> </Link>
                {
                    (test.cartList.length > 0)
                    ? <h4 type="filled" onClick={test.removeList}> <button className='cart-buttons'> DELETE ALL PRODUCTS </button></h4>
                    : <h4>Your cart is empty</h4>
                }
            </div>
            <div >
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <div className='cart-item' key={item.idItem}>
                            <div>
                                <img className='product-image' src={item.imgItem} alt="Same alt value"/> 
                                <div>
                                    {item.titleItem}
                                </div>
                            </div>
                            <div className='cart-price'>
                                <p>{item.qtyItem} item(s)</p>                    
                                <p>${item.priceItem} each</p>
                                <button className='cart-buttons' onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                            </div>
                        </div>
                        )
                        : <h4></h4>
                    }
            </div>
            <div className='total-price'> 
                <h3> Total: <FormatNumber number={test.calcTotal()} /> </h3>
                <button className='cart-button' onClick={createOrder}>Checkout Now</button>
            </div>
        </>
    );
}

export default Cart;

