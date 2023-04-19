import React from "react";
import "./CSS/weather.css";

const Weather = () => {
    const searchButton = document.getElementById("submit");
    const searchInput = document.getElementById("search");
    const weatherDiv = document.querySelector(".weather");
    const tempDiv = document.getElementById("temp");
    const tempUnitDiv = document.getElementById("temp-unit");
    const descriptionDiv = document.getElementById("description");
    const iconDiv = document.getElementById("icon");
    const date1 = document.getElementById("date1");
    const date2 = document.getElementById("date2");
    const date3 = document.getElementById("date3");
    const date4 = document.getElementById("date4");
    const date5 = document.getElementById("date5");
    const date6 = document.getElementById("date6");
    const date7 = document.getElementById("date7");
    const date8 = document.getElementById("date8");
    const date9 = document.getElementById("date9");
    const date10 = document.getElementById("date10");
    const date11 = document.getElementById("date11");
    const date12 = document.getElementById("date12");
    const date13 = document.getElementById("date13");
    const date14 = document.getElementById("date14");
    const date15 = document.getElementById("date15");
    const summary1 = document.getElementById("summary1");
    const summary2 = document.getElementById("summary2");
    const summary3 = document.getElementById("summary3");
    const summary4 = document.getElementById("summary4");
    const summary5 = document.getElementById("summary5");
    const summary6 = document.getElementById("summary6");
    const summary7 = document.getElementById("summary7");
    const summary8 = document.getElementById("summary8");
    const summary9 = document.getElementById("summary9");
    const summary10 = document.getElementById("summary10");
    const summary11 = document.getElementById("summary11");
    const summary12 = document.getElementById("summary12");
    const summary13 = document.getElementById("summary13");
    const summary14 = document.getElementById("summary14");
    const summary15 = document.getElementById("summary15");

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "781a1898b6mshad98f60ddc8eff9p12842bjsn6a7f1c099d08",
            "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
        },
    };

    const getWeather = (city) => {
        fetch(
            "https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=" +
                city +
                "&language=en&units=auto",
            options
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                date1.innerHTML = response.daily.data[0].day;
                date2.innerHTML = response.daily.data[1].day;
                date3.innerHTML = response.daily.data[2].day;
                date4.innerHTML = response.daily.data[3].day;
                date5.innerHTML = response.daily.data[4].day;
                date6.innerHTML = response.daily.data[5].day;
                date7.innerHTML = response.daily.data[6].day;
                date8.innerHTML = response.daily.data[7].day;
                date9.innerHTML = response.daily.data[8].day;
                date10.innerHTML = response.daily.data[9].day;
                date11.innerHTML = response.daily.data[10].day;
                date12.innerHTML = response.daily.data[11].day;
                date13.innerHTML = response.daily.data[12].day;
                date14.innerHTML = response.daily.data[13].day;
                date15.innerHTML = response.daily.data[14].day;
                summary1.innerHTML = response.daily.data[0].summary;
                summary2.innerHTML = response.daily.data[1].summary;
                summary3.innerHTML = response.daily.data[2].summary;
                summary4.innerHTML = response.daily.data[3].summary;
                summary5.innerHTML = response.daily.data[4].summary;
                summary6.innerHTML = response.daily.data[5].summary;
                summary7.innerHTML = response.daily.data[6].summary;
                summary8.innerHTML = response.daily.data[7].summary;
                summary9.innerHTML = response.daily.data[8].summary;
                summary10.innerHTML = response.daily.data[9].summary;
                summary11.innerHTML = response.daily.data[10].summary;
                summary12.innerHTML = response.daily.data[11].summary;
                summary13.innerHTML = response.daily.data[12].summary;
                summary14.innerHTML = response.daily.data[13].summary;
                summary15.innerHTML = response.daily.data[14].summary;
            })
            .catch((err) => console.error(err));
    };

    // searchButton.addEventListener("click", (e) => {
    //     searchInput.focus();
    //     // e.preventDefault();
    //     getWeather(searchInput.value);
    //     searchInput.value = "kanpur";
    //     searchInput.blur();
    // });
    return (
        <>
            <div className="weather">
                <div className="container1">
                    <h1>Weather App</h1>
                    <div className="location">
                        <input
                            className="inpt"
                            type="text"
                            id="search"
                            placeholder="Enter city name"
                        />
                        <button id="submit">Search</button>
                    </div>
                </div>
                <div className="container2">
                    <h1>15-Day Weather Forecast</h1>
                    <div className="weather-forecast"></div>
                </div>
                <div className="container3">
                    <h1>Weather Summary</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Weather Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="date1">April 19, 2023</td>
                                <td id="summary1">Sunny</td>
                            </tr>
                            <tr>
                                <td id="date2">April 20, 2023</td>
                                <td id="summary2">Partly Cloudy</td>
                            </tr>
                            <tr>
                                <td id="date3">April 21, 2023</td>
                                <td id="summary3">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date4">April 21, 2023</td>
                                <td id="summary4">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date5">April 21, 2023</td>
                                <td id="summary5">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date6">April 21, 2023</td>
                                <td id="summary6">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date7">April 21, 2023</td>
                                <td id="summary7">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date8">April 21, 2023</td>
                                <td id="summary8">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date9">April 21, 2023</td>
                                <td id="summary9">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date10">April 21, 2023</td>
                                <td id="summary10">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date11">April 21, 2023</td>
                                <td id="summary11">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date12">April 21, 2023</td>
                                <td id="summary12">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date13">April 21, 2023</td>
                                <td id="summary13">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date14">April 21, 2023</td>
                                <td id="summary14">Thunderstorms</td>
                            </tr>
                            <tr>
                                <td id="date15">April 21, 2023</td>
                                <td id="summary15">Thunderstorms</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Weather;
