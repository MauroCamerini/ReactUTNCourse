import SearchResultsItem from "./SearchResultsItem"

export default function SearchResults (props) {
    const {results} = props

    return (
                
        <ul className="list-group-flush">
            {results.map(item => 
                <li key={item.id} className="list-group-item"><SearchResultsItem productInfo={item}/></li>
            )}
        </ul>
        
    )
}

