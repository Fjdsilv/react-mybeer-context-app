import { useContext, createContext, useState, useEffect } from "react";

const url = "https://api.punkapi.com/v2/beers"

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();

            setBeers(result)
        }

        fetchData()
    }, [])
    
    const deleteBeer = (id) => {
       setBeers((oldBeers) => {
        return oldBeers.filter(beer => beer.id !== id)
       })
    }

    return (
        <AppContext.Provider value={{
            beers,
            setBeers,
            deleteBeer
        }}>
        {children}
        </AppContext.Provider>
    )
}

const useMyContext = () => useContext(AppContext); 


export { AppProvider, useMyContext };