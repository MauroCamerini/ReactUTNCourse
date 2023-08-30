import { logInForm } from "../Utils/forms";
import FormTemplate from "../Components/FormTemplate";
import { useContext, useState } from "react";
import { SessionContext } from "../Context/SessionContext";

export default function LogIn(props) {

    const {login} = useContext(SessionContext)

    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = data => {
        
        setLoading(true)

        login(data.email, data.password).then(() => {
            setLoading(false)
        }).catch((e)=> {
            setLoading(false)
            setErrorMessage(e.message)
        })
    }

    return (
        <>
        <FormTemplate form={logInForm} loading={loading} action={handleSubmit} />
        {(errorMessage !== "") && <p className="text-center text-danger">{errorMessage}</p>}
        </>
    )


}