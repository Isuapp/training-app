import { createContext, useState, useContext } from "react";

//  Crea el context para que sea accesible enm toda la app
const TokenContext = createContext(null);

// Creamos el componente que envolvera toda la app
export const TokenProvider = ({children})=>{

    // Creamos la variable con useState para poder manejarla 
    // Esta variable regoera un objeto que llamaremos token 
    // y almacenaremos en el localstorage
    const [ token, setToken] = useState(localStorage.getItem('token'));

    // Creamos la función que nos permita almacenar el localstorage
    const setTokenInLocalStorage = (tokenValue)=>{
        localStorage.setItem('token', tokenValue);
        setToken(tokenValue)
    }

    // Retornamos el cONTEXTO
    return(
        <TokenContext.Provider value={[token, setTokenInLocalStorage]}>
            {children}
        </TokenContext.Provider>
    )
}

// Creamos el hook para manejarlo
export const useToken = ()=>{
    return useContext(TokenContext)
}

