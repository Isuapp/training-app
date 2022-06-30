import { createContext, useState, useContext } from "react";

const HandlerContext = createContext(null);

export const HandlerProvider = ({children})=>{

    const [handler, setHandler] = useState(null);

    return(
        <HandlerContext.Provider value={[handler, setHandler]}>
            {children}
        </HandlerContext.Provider>
    );
};

export const useHandler = ()=>{
    return useContext(HandlerContext);
};

