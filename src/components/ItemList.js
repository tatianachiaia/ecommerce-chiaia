
import Item from './Item'


const ItemList = ({items}) => {
  return (

    <div className="product-container">
        { 
        items.length > 0
        ? items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} description={item.description} /> ) 
        : <p>cargando..</p>
        } 
        {console.log(items)}
    </div>
  )
}
  
export default ItemList