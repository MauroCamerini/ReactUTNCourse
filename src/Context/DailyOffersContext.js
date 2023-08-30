import { createContext, useCallback, useEffect, useState } from "react";
import { getTodaysOffersQuery, dailyOffersCount } from '../Utils/daily_offers'
import { searchProducts, getProductById } from "../Services/MercadoLibre";

export const DailyOffersContext = createContext()

export function DailyOffersProvider(props) {

    const {children} = props

    const [dailyOffers, setDailyOffers] = useState()
    const [errorMessage, setErrorMessage] = useState("")

    const loadDailyOffers = useCallback(async ()=> {
        const searchResults = await searchProducts(getTodaysOffersQuery())
        
        const newOffers = [dailyOffersCount]

        for(let i = 0; i < dailyOffersCount; i++)
            newOffers[i] = await getProductById(searchResults.results[i].id); 

        setDailyOffers(newOffers)
        setErrorMessage("")

    },[])

    useEffect(()=>{
        if(dailyOffers) return;

        loadDailyOffers().catch(()=>{
            setErrorMessage("No se pudieron cargar las ofertas")
        })

    },[dailyOffers, loadDailyOffers])

    return (
        <DailyOffersContext.Provider value={{dailyOffers, errorMessage}}>
            {children}
        </DailyOffersContext.Provider>
    )
}