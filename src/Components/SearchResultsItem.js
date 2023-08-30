import { Link } from "react-router-dom"
import AddToListButton from "./AddToListButton"

export default function SearchResultsItem(props) {

    const {title, id } = props.productInfo

    return (
        <>
        <div className="row">
            <div className="col-lg-6">{title}</div>
            <div className="col-lg-2">ID:{id}</div>

            <div className="col-lg-2">
                <AddToListButton productId={id} title={title} small/>
            </div>

            <div className="col-lg-2"><Link to={'/product/'+id}>Ver detalle</Link></div>
            
            
            
        </div>
        </>
    )
}
