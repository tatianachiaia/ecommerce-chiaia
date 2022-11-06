import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
            : <p>Cargando...</p>
        } {console.log(item)}
        </>
    );
}

export default ItemDetail;