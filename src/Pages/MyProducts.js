import { useContext } from "react";
import ProductList from '../Components/ProductList'
import ErrorMessage from '../Layouts/ErrorMessage'
import { SessionContext } from "../Context/SessionContext";
import ComponentPage from "../Layouts/ComponentPage";

export default function MyProducts() {

    const {products} = useContext(SessionContext)    

    return (
        <ComponentPage title="Tus productos">
        {products ?
            <ProductList products={products} /> :
            <ErrorMessage message="Error al cargar los productos" />
            }
        </ComponentPage>
    )
}