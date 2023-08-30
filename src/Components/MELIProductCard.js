
import { Link } from "react-router-dom"

export default function MELIProductCard(props) {

    const {title, id, currency_id, price, pictures } = props.productInfo

    return (
    <div className="card mx-auto mt-2" style={{width: '18rem'}}>
        <img className="card-img-top" src={pictures[0].url} alt={title} />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">ID: {id}</p>
        <p className="card-text">{currency_id} {price}</p>
        
        </div>
        <p className="text-center "><Link to={'/product/'+id}>Ver detalle</Link></p>
    </div>
  )
}