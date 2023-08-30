import { createContext, useCallback, useEffect, useState } from "react";
import MainLoading from "../Layouts/MainLoading";
import { endCurrentSession, LogInAndGetUser, parseUser, subscribeToChanges } from "../Services/Auth";
import { getUserProducts } from "../Services/DB";

export const SessionContext = createContext()


export function SessionProvider ({children}) {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [products, setProducts] = useState()

    /*
        Si hay una sesión en el navegador pero no en la app, toma esa sesión como activa.
    */
    const onAuthChange = useCallback(async (authUser) => {

        try{
            if(!user && authUser){
                setUser(await parseUser(authUser))
            } 
            setLoading(false)
        } catch {
            // Si hay algún error, se considera que no hay sesión activa
            setUser()
            setLoading(false)
        }
        
    }, [user])

    const login = async (email, password) => {

        const res = await LogInAndGetUser(email, password)

        if(res.errors) {
            throw new Error(res.errorMessage);
        }

        setUser(res.user)
    }

    /* 
        Carga la lista de productos correspondientes al usuario
    */
    const reload = useCallback(async () =>{
        try {
            const res = await getUserProducts(user.uid)
            if(res) {
                setProducts(res)
            }
        } catch {
            throw new Error("Error al cargar los productos")
        }
    }, [user])
        
    const logout = () => {
        endCurrentSession().then(()=>{
            setUser()
            setProducts()
        }).catch(()=>{
            setUser()
            setProducts()
        })
    }
    
    /*
        Cuando cambia el usuario o recarga el componente se recargan los productos
    */
    useEffect(()=> {
        if(user) {
            try {
                reload()
            }catch {
                setProducts()
            }
        } else {
            setProducts()
        }
    }, [user, reload])

    /*
      Cuando carga el componente se subscribe a los cambios de autenticación. onAuthChange es llamado inmediatamente
        así que allí ocurre el verdadero 'didMount' de este componente
     */
    useEffect(()=>{
        subscribeToChanges(onAuthChange)
    }, [onAuthChange])

    return (
        <SessionContext.Provider value={{user, products, login, reload, logout}}>
            {
                loading ? <MainLoading /> : children
            }
        </SessionContext.Provider>
    )
}
