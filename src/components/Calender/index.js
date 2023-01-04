import './Calender.scss'

function Calender() {
    const d = new Date()
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return (
        <div className="calender-wrapper">
            <h4 className="calender"> {day} {month} {year} </h4>
        </div>
    );
}

export default Calender;