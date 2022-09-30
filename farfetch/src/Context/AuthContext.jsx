import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProdvider({children}) {
    const [isAuthorized, changeAuthorized] = useState(false)
    return (
        <AuthContext.Provider value={{isAuth:isAuthorized, changeAuth:changeAuthorized}}>{children}</AuthContext.Provider>
    )
}