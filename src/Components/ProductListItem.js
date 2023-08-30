import RemoveFromListButton from "./RemoveFromListButton"
import { Link } from "react-router-dom"

export default function ProductListItem (props) {
    const { product } = props
    const { id, productId, title } = product

    return (
        <>
        <div className="row">
            <div className="col-lg-6">{title}</div>
            <div className="col-lg-2">ID:{productId}</div>
            
            <div className="col-lg-2"><Link to={'/product/'+productId}>Ver detalle</Link></div>
            <div className="col-lg-2">
                <RemoveFromListButton productId={id} small/>
            </div>  
        </div>
        </>
    )
}