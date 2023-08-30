import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MELIProductViewer from "../Components/MELIProductViewer";
import ErrorMessage from "../Layouts/ErrorMessage";
import { getProductById } from "../Services/MercadoLibre"
import Loading from "../Layouts/Loading";

export default function Product(props) {

    const { id } = useParams()

    const [ message, setMessage ] = useState("")
    const [ product, setProduct] = useState()
    const [ loading, setLoading ] = useState(true)

    
    useEffect(()=> {
        setLoading(true)
        getProductById(id).then( res => {
            setProduct(res)
            setLoading(false)
        }).catch(e => {
            setMessage("Error al cargar el producto")
            setLoading(false)
        })
    }, [id])

    return (
        <div className="container pt-4">
            <ErrorMessage message={message} />
            <Loading loading={loading}>
                {product && <MELIProductViewer product={product} />}
            </Loading>
        </div>
    )
}