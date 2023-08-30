import { useContext, useState } from "react"
import { SessionContext } from "../Context/SessionContext"
import { Spinner } from "react-bootstrap"
import { deleteUserProduct } from "../Services/DB"

export default function RemoveFromListButton(props) {

    const { reload } = useContext(SessionContext)
    const {productId, small} = props

    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
        deleteUserProduct(productId).then(()=> {
            reload()
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    return (
        <>
        {loading && <Spinner animation="border" variant="danger" size={small ? 'sm' : ''}/>}
        {!loading && 
            <button 
                onClick={handleClick} 
                type="button" 
                className={"btn btn-danger" + (small ? " btn-sm" : "")}
                >Eliminar</button>
        }    
        </>   
    )
    

}