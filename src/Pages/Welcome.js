import TextPage from "../Layouts/TextPage";
import { SessionContext } from "../Context/SessionContext";
import DailyOffersViewer from "../Components/DailyOffersViewer";

export default function Welcome() {

    return (
        <>
        <SessionContext.Consumer>
            {({user}) => {
                return (
                    <TextPage title={"Bienvenido, " + user.name + "."}>
                        <p className='lead'>
                        Realiza una búsqueda de productos y agregalos a tu lista. 
                        Podrás consultar o editar tu lista cuantas veces quieras.
                        </p>
                    </TextPage>
      
                )
            }}
        </SessionContext.Consumer>
            <DailyOffersViewer />
        </>
    )
}