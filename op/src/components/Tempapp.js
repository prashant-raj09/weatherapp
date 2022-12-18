import React, { useEffect, useState } from "react";
import "./CSS/style.css";
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a935bfa9b26c598c30a365aeb9acf293`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        classNmae="inputFeild"
                        placeholder="Enter City Name"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp} °Cel
                            </h1>
                            <h3 className="tempmin_max">Min: {city.temp_min}°Cel | Max: {city.temp_min}°Cel</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>)}
                <p className="footer">© prashantraj12313@gmail.com</p>
            </div>
        </>
    )
}


export default Tempapp;