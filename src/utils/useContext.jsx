import { createContext, useContext, useState } from "react";

const Context = createContext();

export const GlobalProvider = ({ children }) => {
    const [serviceId, setServiceId] = useState(1);
    return <Context.Provider value={{serviceId, setServiceId}}>{children}</Context.Provider>
}

export const useGlobalContext = () => useContext(Context);