import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useData = () => useContext(LocationContext)

function LocationProvider({children}) {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')
    console.log(weather);

    const classes = {
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