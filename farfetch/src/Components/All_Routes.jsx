import {Routes, Route} from 'react-router-dom'
import Home from "../Routes/Home"
import Women from '../Routes/Women'
import Kids from '../Routes/Kids'
import Men from '../Routes/Men'
import Cart from '../Routes/Cart'
import Wishlist from '../Routes/Wishlist'
import ProductPage from '../Routes/ProductPage'
import Clothing from '../Routes/Clothing'

export default function AllRoute() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/women" element={<Women />}/>
            <Route path="/men" element={<Men />}/>
            <Route path="/kids" element={<Kids />}/>
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path='/:person/:id' element={<ProductPage />}></Route>
            <Route path='/:person/clothing' element={<Clothing />}></Route>
        </Routes>
    )

}