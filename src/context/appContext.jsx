import { useContext, createContext, useState, useEffect } from "react";

// const url = "https://api.punkapi.com/v2/beers"

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={"bolo"}>
        {children}
        </AppContext.Provider>
    )
}

const useMyContext = () => useContext(AppContext); 


export { AppProvider, useMyContext };