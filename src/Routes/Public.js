import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import MainContainer from "../Layouts/MainContainer";
import NotFound from "../Pages/NotFound";
import SignUp from "../Pages/SignUp";
import Search from "../Pages/Search";
import Product from "../Pages/Product";

export default function Public(props) {

    return (
        <Routes>
            <Route path='/' element={<MainContainer />}>
                <Route index element={<Home />} />
                <Route path='search' element={<Search />} />
                <Route path='product/:id' element={<Product />} />
                <Route path='logout' element={<Navigate to='/' />} />
                <Route path='login' element={<LogIn />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
  )
    
}