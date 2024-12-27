import { createContext } from "react";

export const LocacaoContext = createContext();

export const LocacaoContextProvider = ({children})=>{
    return(

    <LocacaoContext.Provider value={""}>
    {children}
    </LocacaoContext.Provider>

    )
}