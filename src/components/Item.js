

const Item = ({ id, title, price, thumbnail, description}) => {
    return (
        <div className="product-info">
            <p>{id}</p>
            <h3>title: {title}</h3>
            <img src={thumbnail} alt="Same alt value"/>
            <p>Precio: {price}</p>
            <p>{description}</p> 
        </div>
    )
}

export default Item