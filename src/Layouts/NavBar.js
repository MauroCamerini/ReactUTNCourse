
import {Navbar, Nav, Container } from 'react-bootstrap'
import {Link } from 'react-router-dom'

export default function NavBar (props) {

    const {brand, links, user} = props

//<Container >
    return (  
        <Navbar bg="dark" variant="dark">
        <Container className="flex-column flex-md-row">
            <Navbar.Brand as={Link} to="/">
                    <img
                    alt=""
                    src="/images/cart.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
                {brand}</Navbar.Brand>
                <Nav className="me-md-auto flex-column flex-md-row text-center text-nowrap">
                {links.map((link, index) => <Nav.Link key={index} as={Link} to={link.route}>{link.caption}</Nav.Link>)}
                </Nav>
            { user && 
            <>
            <div className="justify-content-end my-md-0 my-2">
                <div className='d-flex flex-reverse justify-content-center'>
                <img
                    alt=""
                    src="/images/user.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-center">
                </img>
                <Navbar.Text className="text-light text-nowrap">
                    {user.name} {user.lastname}
                </Navbar.Text>
                </div>
                
            </div>
            </>
            }
            
            
        </Container>
        </Navbar>
    )
}