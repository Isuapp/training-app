import { createContext, useState, useContext } from "react";

//  Crea el context para que sea accesible enm toda la app
const UserContext = createContext(null);

// Creamos el componente que envolvera toda la app
export const UserProvider = ({children})=>{

    // Creamos la variable con useState para poder manejarla 
    // Esta variable regoera un objeto que llamaremos token 
    // y almacenaremos en el localstorage
    const [ user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    // Creamos la función que nos permita almacenar el localstorage
    const setUserInLocalStorage = (userValue)=>{
        localStorage.setItem('user', JSON.stringify(userValue));
        setUser(userValue)
    }

    // Retornamos el contexto
    return(
        <UserContext.Provider value={[user, setUserInLocalStorage]}>
            {children}
        </UserContext.Provider>
    )
}

// Creamos el hook para manejarlo
export const useUser = ()=>{
    return useContext(UserContext)
}

