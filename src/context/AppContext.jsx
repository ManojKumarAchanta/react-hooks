import { createContext } from "react";

export const AppContext=createContext();

const ContextProvider=(props)=>{
    const phone="+1 1234567890";
    const email="example@gmail.com";
    return (
        <AppContext.Provider value={{phone,email}}>
            {props.children}
        </AppContext.Provider>
    )   
}

export default ContextProvider;