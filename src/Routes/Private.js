import { Route, Routes, Navigate } from "react-router-dom";
import LogOut from "../Pages/LogOut";
import MainContainer from "../Layouts/MainContainer";
import NotFound from "../Pages/NotFound";
import Welcome from "../Pages/Welcome";
import Search from "../Pages/Search";
import Product from "../Pages/Product";
import MyProducts from "../Pages/MyProducts";

export default function Private(props) {

    return (
        <Routes>
            <Route path='/' element={<MainContainer />}>
                <Route index element={<Welcome />} />
                <Route path='search' element={<Search />} />
                <Route path='myproducts' element={<MyProducts />} />
                <Route path='product/:id' element={<Product />} />
                <Route path='login' element={<Navigate to="/" />} />
                <Route path='signup' element={<Navigate to="/" />} />
                <Route path='logout' element={<LogOut />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
  )
    
}