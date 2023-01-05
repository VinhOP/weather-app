import { useData } from "../../Context/LocationContext";
import './Location.scss'

function Location() {
    const data = useData()
    
    const success = (position) => {

        fetch(`${data.api.base}weather?&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${data.api.key}`)
        .then(res => res.json())
        .then((result) => {
            data.setWeather(result)
        })
    }

    const error = (error) => {
        console.log(error);
    }

    const currentPos = () => {
        navigator.geolocation.getCurrentPosition(success , error ,{enableHighAccuracy: true})
    }

    return (
        <div className='location-wrapper'>
            <button className={'get-pos-btn'} onClick={currentPos}> get current position </button>
            {data.weather && <h2 className="location">{data.weather.name}, {data.weather.sys.country} </h2>}
        </div>
    );
}

export default Location;