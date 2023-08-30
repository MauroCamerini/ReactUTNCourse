import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import {Container} from 'react-bootstrap'
import { useContext } from 'react'
import { privateLinks, publicLinks } from '../Utils/links'
import { SessionContext } from '../Context/SessionContext'


export default function MainContainer(props) {

    const {user} = useContext(SessionContext)

    return (
        <>
            <NavBar brand="MisProductos" links={user ? privateLinks : publicLinks} user={user}/>
            <Container className="container-lg mt-4" >
                <Outlet />
            </Container>
        </>
    )
}