import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
        <h2 className="text-center display-4">Página no encontrada</h2>
        <p className="text-center"><Link to="/">Volver al inicio</Link></p>
        </>
    )
}