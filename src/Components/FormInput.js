
import { Form } from "react-bootstrap"

export default function FormInput (props) {
    const {label,type,placeholder,name,register} = props

    return (
        <>
        <Form.Group className="form-outline mb-3" controlId={name}>
            
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type || "text"} name={name || ''} placeholder={placeholder} {...register} />
        </Form.Group>
        </>
    )
}