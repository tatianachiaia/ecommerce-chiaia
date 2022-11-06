import ItemList from './ItemList'
import { customFetch } from '../utils/customFetch'
import { products } from '../utils/stock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams();


  //componentDidMount
  useEffect(() => {
    customFetch(1000, products.filter(item => {
        if (idCategory === undefined) return item;
        return item.categoryId === idCategory
    }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
}, [idCategory]);

  return (
    <>
      <ItemList items={datos} />
    </>
  )
}

export default ItemListContainer