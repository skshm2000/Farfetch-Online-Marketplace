import { createContext } from "react";
import { useState } from "react";

export const WishlistContext = createContext()

export default function WishlistContextProdvider({children}) {
    const [wishlistItems, changeWishlistItems] = useState([])
    return (
        <WishlistContext.Provider value={{wishlistItems, changeWishlistItems}}>{children}</WishlistContext.Provider>
    )
}