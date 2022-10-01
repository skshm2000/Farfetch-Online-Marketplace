import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export default function CartContextProdvider({children}) {
    const [cartItems, changeCartItems] = useState([])
    return (
        <CartContext.Provider value={{cartItems, changeCartItems}}>{children}</CartContext.Provider>
    )
}