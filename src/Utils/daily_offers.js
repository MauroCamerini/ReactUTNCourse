export const dailyOffersCount = 6

const dailyOffersQueries = ["auto", "camioneta", "celulares", "pc", "heladera", "lavarropa", "tv"]

/*
    Devuelve cada día una query distinta, pero la misma a lo largo del día
*/
export const getTodaysOffersQuery = () => {

    const day = Math.floor((new Date()) / 1000 / 60 / 60 / 24)

    // El try está porque no quiero que se me crashee la app por si me tira un index erroneo esta linea de código
    // que no probé exhaustivamente
    try{
        return dailyOffersQueries[day % (dailyOffersQueries.length-1)]
    }catch{
        return "auto"
    }
}