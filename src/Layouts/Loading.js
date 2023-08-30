import LoadingSpinner from "./LoadingSpinner";


export default function Loading(props) {
    const {loading, children} = props

    if(loading){
        return <LoadingSpinner />
    }
    else {
        return <>{children}</>
    }
}
