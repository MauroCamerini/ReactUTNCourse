
import AddToListButton from "./AddToListButton"
import AttributeList from "./AttributeList"

export default function MELIProductViewer (props) {

    const { product } = props

    return (
        <>
        <h2 className="display-3 text-center">{product?.title}</h2>
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
            <img className="img-fluid img-thumbnail" src={product?.pictures[0]?.url} alt={product?.title}/>
            </div>
            <div className="col-lg-6 mt-5">
                <ul className="list-unstyled">
                    <li><p className="lead">Precio: {product?.currency_id} {product?.price} </p></li>
                    <li><p className="lead">Stock: {product?.available_quantity}</p></li>
                    <li><p className="lead">Ubicación del vendedor: {product?.seller_address.city.name}, {product.seller_address.state.name}</p></li>
                </ul>
                <AddToListButton productId={product.id} title={product.title} />
            </div>  
            <div>
                <AttributeList attributes={product?.attributes} />
            </div>
            
        </div>
        </>
    )
}