import { singUpForm } from "../Utils/forms";
import FormTemplate from "../Components/FormTemplate";
import { CreateUser } from "../Services/Auth";
import { useState } from 'react'
import SuccessMessage from "../Layouts/SuccessMessage";
import ErrorMessage from "../Layouts/ErrorMessage";
import { Link } from "react-router-dom";

export default function SignUp(props) {

    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [userCreated, setUserCreated] = useState(false)

    const handleSubmit = data => {
        
        setLoading(true)

        CreateUser(data.email, data.password, data.name, data.lastname )
        .then( res => {
            
            setLoading(false)
            
            if(!res.errors) {
                setUserCreated(true)
            }
            else {

                setErrorMessage(res.errorMessage)
            }
        })
    }

    if(userCreated) {
        return (
        <>
            <SuccessMessage message="Cuenta creada" />
            <p className="text-center"><Link to='/login'>Iniciar sesión</Link></p>
        </>)
    } else {
        return (
            <>
            <FormTemplate form={singUpForm} action={handleSubmit} loading={loading}/>
            {(errorMessage) && <ErrorMessage message={errorMessage} />}
            </>
        )
    }
    
}