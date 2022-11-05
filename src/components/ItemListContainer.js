import ItemList from './ItemList'
import { customFetch } from '../utils/customFetch'
import { products } from '../utils/stock'
import { useEffect, useState } from 'react'


const ItemListContainer = () => {
    const [datos, setDatos] = useState([])


  //componentDidMount
  useEffect(() => {
    customFetch(1000, products)
      .then(response => setDatos(response))
      .catch(err => console.log(err))
  }, [datos])

  return (
    <>
      <ItemList items={datos} />
    </>
  )
}

export default ItemListContainer