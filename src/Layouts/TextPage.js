import {Row, Col} from 'react-bootstrap'
import PageTitle from '../Layouts/PageTitle'

export default function TextPage(props) {
    const {title, children} = props

    return (
        <Row className="d-flex justify-content-center">
            <Col className="col-10">
                <PageTitle>{title}</PageTitle>
                {children}
            </Col>
        </Row>
    )
}