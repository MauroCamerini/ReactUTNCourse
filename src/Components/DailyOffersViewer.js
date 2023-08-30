import { useContext, useEffect, useState } from "react";
import Loading from "../Layouts/Loading";
import SectionTitle from "../Layouts/SectionTitle";
import MELIProductCard from "./MELIProductCard";
import ErrorMessage from '../Layouts/ErrorMessage';
import { DailyOffersContext } from "../Context/DailyOffersContext";

export default function DailyOffersViewer(props) {
    
    const [loading, setLoading] = useState(true)
    const {dailyOffers, errorMessage} = useContext(DailyOffersContext)

    useEffect(()=> {
        if(dailyOffers || errorMessage) 
            setLoading(false);

    }, [dailyOffers, errorMessage])

    return (
        <>
        <SectionTitle>Ofertas del día</SectionTitle>
        <Loading loading={loading}>
            <div className="container-lg justify-content-center pt-4">
            <div className="row justify-content-center pt-4">
            {dailyOffers && dailyOffers.map(product => 
                <MELIProductCard key={product.id} productInfo={product} />
                )}
            {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
            </div>
        </Loading>
        </>
    )
}