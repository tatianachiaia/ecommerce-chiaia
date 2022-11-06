
import { useEffect, useState } from 'react';


const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div className='itemCount'>
            <div className='pointer' onClick={increment}><i className="fa-solid fa-plus"></i></div >
            <>{count}</>
            <div className='pointer' onClick={decrement}><i className="fa-solid fa-minus"></i></div>
            {
                stock
                ? <button onClick={() => onAdd(count)}>Add to Cart</button>
                : <button disabled>Add to Cart</button>
            }
            
        </div>
    );
}

export default ItemCount;