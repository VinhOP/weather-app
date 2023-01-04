import { useData } from "../../Context/LocationContext";
import './Location.scss'

function Location() {
    const data = useData()
    
    return (
        <div className='location-wrapper'>
            <h2 className="location">{data.weather.name}</h2>
        </div>
    );
}

export default Location;