import {useEffect, useContext} from 'react'
import SuccessMessage from '../Layouts/SuccessMessage'
import { SessionContext } from '../Context/SessionContext'

export default function LogOut() {

    const {logout} = useContext(SessionContext)

    useEffect(()=> {
        logout()
    }, [logout])

    return (
        <SuccessMessage message="Cerrando sesión..." />
    )

}