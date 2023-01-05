import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useData = () => useContext(LocationContext)

function LocationProvider({children}) {

    const api = {
        key: '65a76a052ea02efa0c91bc767945904c',
        base: 'https://api.openweathermap.org/data/2.5/',
    }

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')

    const classes = {
        api,
        query,
        setQuery,
        weather,
        setWeather,
    }

    return (
        <LocationContext.Provider value={classes}>
            {children}
        </LocationContext.Provider>
    );
}

export default LocationProvider;