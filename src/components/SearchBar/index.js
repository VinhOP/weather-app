import { useState } from 'react';
import { useData } from '../../Context/LocationContext';
import './SearchBar.scss'

function SearchBar() {

    const data = useData()

    const search = (e) => {
        if(e.key === 'Enter') {
            fetch(`${data.api.base}weather?q=${data.query}&units=metric&APPID=${data.api.key}`)
            .then(res => res.json())
            .then(result => {
                data.setWeather(result)
                data.setQuery('')
            })
        }
    }
    return (
        <div className='searchbar-wrapper'>
            <input 
                className='search-bar' 
                type="text" 
                placeholder='Search for location...'
                onChange={(e) => data.setQuery(e.target.value)}
                onKeyPress={search}
                value={data.query}
            />  
            </div>
    )
}

export default SearchBar;