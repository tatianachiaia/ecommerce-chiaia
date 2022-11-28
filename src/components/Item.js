import {Link} from 'react-router-dom'

const Item = ({ id, title, price, thumbnail}) => {
    return (
    <div>
        <div className="product-info">
            <img className="product-image" src={thumbnail} alt="Same alt value"/>
            <h3> {title}</h3>
            <p>Price: ${price}</p>
            <p ><Link to={`/item/${id}`} className="seeDetails">See details</Link></p>
        </div>
    </div>
    )
} 

export default Item