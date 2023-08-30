import { useContext, useState } from "react"
import { SessionContext } from "../Context/SessionContext"
import { Spinner } from "react-bootstrap"
import { addProductToUserList } from "../Services/DB"

export default function AddToListButton(props) {

    const {user, products, reload } = useContext(SessionContext)
    const {productId, title, small} = props

    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        try {
            await addProductToUserList(user, productId, title)
            await reload()
            setLoading(false)
        } catch {
            setLoading(false)
        }
    }

    if(user) {
        return (
            <>
            {loading && <Spinner animation="border" variant="success" size={small ? 'sm' : ''}/>}
            {!loading && 
                (products?.find((p) => p.productId === productId) 
    
                    ? <><button 
                        type="button" 
                        className={"btn btn-secondary" + (small ? " btn-sm" : "")} 
                        disabled>
                        En tu lista</button>
                    </>
    
                    : <><button 
                        onClick={handleClick} 
                        type="button" 
                        className={"btn btn-success" + (small ? " btn-sm" : "")}
                        >Agregar</button>
                    </>)}
            </>
        )
    } else {
        return <></>
    }
    

}