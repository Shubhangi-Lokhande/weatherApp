import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from '../../redux/weatherSlice';

const Weather = () => {

    const dispatch = useDispatch();
    const climate = useSelector((state) => state.weather);
    const [city, setCity] = useState('Pune')
    const {weather, main, name, sys} = climate.data;
   
    useEffect(()=>{
        dispatch(fetchWeatherAction(city))
    }, []);
    
    
    //if(state.data.length == 0) return;

     return (
        <section className="flex items-center justify-center mt-4">
            
            <div className="w-3/4 flex flex-col items-center justify-center border border-blue-900  bg-gray-200 ">
            <div className="text-3xl font-semibold mt-8 text-blue-700">Weather Forecast</div>
              <div className="text-lg font-semibold my-4">Using React and Redux-toolkit</div>
              <div>
                <input placeholder={city} className="text-sm font-mono p-2 rounded-lg" 
                onChange={(e) => {setCity(e.target.value)}}/>
                <button className="bg-cyan-200 p-2 mx-3 rounded-lg hover:bg-slate-700 hover:text-white"
                onClick={() =>  dispatch(fetchWeatherAction(city))}>Enter</button>
              </div>
              {climate.loading && <div>Loading .....</div>}
              {(!climate.loading && climate.error) ? <div className="text-red-700 font-semibold my-4">Error: {climate.error} </div>: null}
              {(!climate.loading && climate.data.length !=0) ? ( <div className="border-2 bg-blend-color-dodge border-gray-900 w-2/4 my-4 text-center">
                        <div className="flex justify-center items-center mt-2">
                            <span className="w-24 h-24 border-2 border-black rounded-full bg-blue-200 flex justify-center items-center">
                                <img className="w-56" src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
                            </span>
                            <h1 className="font-semibold text-blue-800 text-2xl mx-5">
                                    {weather[0].main}
                            </h1> 
                        </div>
                        <div>
                            <span>temp: {((main?.temp)-273.15).toFixed(2)}</span>
                            <span className="text-xl">°C</span>
                        </div>
                        <div>
                            <span>Feels Like: {((main?.feels_like)-273.15).toFixed(2)}</span>
                            <span className="text-xl">°C</span>
                        </div>
                        <div className="text-lg font-semibold mt-2">{name}, {sys?.country} </div>
                        <div className="p-4">The weather condition in {name} is described as {weather[0].description} 
                        with temprature of {((main?.temp)-273.15).toFixed(2)}°C 
                        and humidity of {main?.humidity}.</div>
                    </div>): null }
            </div>
        </section>
     )
 }
 
 export default Weather;
