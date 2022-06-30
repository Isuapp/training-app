import { createContext, useState, useContext } from "react";

const AdminContext = createContext(null);

export const AdminProvider = ({children})=>{

    const [admin, setAdmin] = useState(localStorage.getItem('admin'));

    const setAdminInLocalStorage = (adminValue)=>{
        localStorage.setItem('admin',adminValue);
        setAdmin(adminValue);
    }
    return(
        <AdminContext.Provider value={[admin, setAdminInLocalStorage]}>
            {children}
        </AdminContext.Provider>
    )
    
}

export const useAdmin = ()=>{
    return useContext(AdminContext)
}