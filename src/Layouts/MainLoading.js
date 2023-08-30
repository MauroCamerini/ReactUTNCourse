import { Spinner } from "react-bootstrap";

export default function MainLoading() {
    return (
        <div className="container mx-auto d-flex text-center justify-content-center align-middle">
            <div className="align-middle mt-4 pt-4"><Spinner animation="grow" /></div>
        </div>
    )
}