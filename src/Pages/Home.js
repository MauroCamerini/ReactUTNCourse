
import TextPage from "../Layouts/TextPage"
import DailyOffersViewer from "../Components/DailyOffersViewer"

export default function Home() {
    return (
        <>
        <TextPage title="Bienvenido a MisProductos">
            <p className='lead'>Accediendo a <em>Buscar productos</em> usted puede realizar una búsqueda de productos
            de Mercado Libre. Una vez obtenidos los resultados de búsqueda puede obtener información adicional
            del producto haciendo click en <em>ver detalle</em>.</p>
            <p className='lead'>Si crea una cuenta en <strong>MisProductos</strong>, puede agregar los productos a su lista personal desde los resultados de búsqueda o desde el detalle del producto. Este listado puede ser consultado y modificado
            accediendo a la sección <em>Mis productos</em>.</p>
            <p className='lead'>Aquí puede acceder a la <a href="https://maurocamerini.github.io/">versión de producción</a> hosteada en GitHub</p>
        </TextPage>
        <DailyOffersViewer />

        </>
    )
}