import { createContext, useState, useContext } from "react";

const AdminContext = createContext(null);

export const AdminProvider = ({children})=>{

    const [admin, setAdmin] = useState(null);

    return(
        <AdminContext.Provider value={[admin, setAdmin]}>
            {children}
        </AdminContext.Provider>
    )
    
}

export const useAdmin = ()=>{
    return useContext(AdminContext)
}