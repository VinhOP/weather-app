import { useState } from 'react';
import { useData } from '../../Context/LocationContext';
import './SearchBar.scss'

function SearchBar() {
    const api = {
        key: '65a76a052ea02efa0c91bc767945904c',
        base: 'https://api.openweathermap.org/data/2.5/',
    }

    const data = useData()

    const search = (e) => {
        if(e.key === 'Enter') {
            fetch(`${api.base}weather?q=${data.query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                data.setWeather(result)
                data.setQuery('')
                console.log(result);
            })
        }
    }
    return (
        <div className='searchbar-wrapper'>
            <input 
                className='search-bar' 
                type="text" 
                placeholder='Search'
                onChange={(e) => data.setQuery(e.target.value)}
                onKeyPress={search}
                value={data.query}
            />  
            </div>
    )
}

export default SearchBar;