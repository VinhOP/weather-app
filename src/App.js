import './App.scss';
import Date from './components/Calender';
import Location from './components/Location';
import SearchBar from './components/SearchBar';
import { useData } from './Context/LocationContext';

function App() {
  const data = useData()

  return (
    <div className="app">
      <div className={'app-wrapper'}>
        <SearchBar />
        <Location />
        <Date />
        <div className='temp-container'>
          {data.weather && <h1 className='temp'> {Math.round(data.weather.main.temp)}&#8451; </h1>}
        </div>
        <div className='weather-status'>
          {data.weather && data.weather.weather[0].description}
        </div>
      </div>
    </div>
  );
}

export default App;
