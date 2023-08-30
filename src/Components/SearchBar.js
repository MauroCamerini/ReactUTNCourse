import { useState } from "react"
import SubmitWithLoading from "./SubmitWithLoading"

export default function SearchBar (props) {

    const [query, setQuery] = useState("")
    const {doSearch, message, loading} = props
    
    const handleSubmit = e => {
        doSearch(query)
        e.preventDefault()
    }

    return (
        <div className="SearchBar">
        <div>
        <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar productos, marcas y mas..." 
                aria-label="Buscar productos, marcas y mas..." 
                aria-describedby="basic-addon2"
                onChange={e => setQuery(e.target.value)}
                disabled={loading}
            /> 
            <div className="input-group-append">
                <SubmitWithLoading
                    variant="primary"
                    loading={loading}
                    >Buscar
                </SubmitWithLoading>
            </div> 
        </form>
        </div>
        <p className="lead">{message}</p>
        </div>
    )
}
