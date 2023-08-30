
import ProductListItem from "./ProductListItem"

export default function ProductList(props) {
    const {products } = props

    return (
        <ul className="list-group-flush">
            {products?.map(product =>
                <li key={product?.id} className="list-group-item">
                <ProductListItem 
                    product={product} 
                /></li>)}
        </ul>
    )
}