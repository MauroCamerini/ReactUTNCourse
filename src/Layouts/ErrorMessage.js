
export default function ErrorMessage(props) {
    
    return (<>{props.message &&   <p className="text-center text-danger">{props.message}</p>}</>)
    
}