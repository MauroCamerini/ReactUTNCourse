
import { BrowserRouter } from "react-router-dom";
import Public from "./Routes/Public";
import Private from "./Routes/Private"
import { SessionContext, SessionProvider } from "./Context/SessionContext";
import { DailyOffersProvider } from "./Context/DailyOffersContext";


function App() {

  return (
    <div className="App">
      <SessionProvider>
        <DailyOffersProvider>
          <BrowserRouter>
            <SessionContext.Consumer>

              {({user}) => {
                return (<>{ user ?
                  <Private /> :
                  <Public />
                }</>)
              }}

            </SessionContext.Consumer>
          </BrowserRouter>
        </DailyOffersProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
