import {Container, Spinner} from 'react-bootstrap'

export default function LoadingSpinner() {
    return (
        <Container className="container-fluid d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
        </Container>
        )
}