
import { useReducer } from "react";
import SearchBar from "./SearchBar";
import { searchProducts } from "../Services/MercadoLibre";
import SearchResults from "./SearchResults";

const initialState = {
    log: "",
    searchDone: false,
    results: [],
    isLoading: false
}

const searchReducer = (state, action) => {
    switch(action.type){
        case 'searching': {
            return {
                ...state,
                searchDone: false,
                log: 'Buscando productos...',
                isLoading: true
            }
        }
        case 'searchdone': {
            return {
                ...state,
                results: action.response.results,
                log: (action.response.paging.total >50) ? 
                    "Se muestran 50  de " + action.response.paging.total + " productos encontrados." :
                    "Se encontraron " + action.response.paging.total + " productos",
                searchDone: true,
                isLoading: false
            }

        }
        case 'error': {
            
            return {
                ...state,
                log: "Error en la búsqueda"
            }
        }
        default:
            return state
    }
}

export default function MELIProductSearch(props) {

    const [state, dispatch] = useReducer(searchReducer, initialState)

    const {results, log, searchDone, isLoading} = state

    const search = query => {

        dispatch({type: 'searching'})

        searchProducts(query).then(res => {

            dispatch({type: 'searchdone', response: res})

        }).catch(e => {
            dispatch({type: 'error'})
        })
    }

    return (
        <div className="container-lg">
            <SearchBar doSearch={search} message={log} loading={isLoading}/>
            {(searchDone) && <SearchResults results={results} />}
        </div>
    )
}