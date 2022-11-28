import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {firebaseFetch} from "../utils/firestoreUtils" 


const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams();


  //componentDidMount
  useEffect(() => { 
    firebaseFetch(idCategory)
    .then(response => setDatos(response))
    .catch(err => console.log(err))
}, [idCategory]);

  return (
    <>
      <ItemList items={datos} />
    </>
  )
}

export default ItemListContainer