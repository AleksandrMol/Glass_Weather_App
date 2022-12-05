import React from 'react';
import { WeatherIcon } from '../WeatherIcon';
import './tempweathercomponent.css';

interface ITempWeatherProps{
  weatherId: number,
  temp: number,
}

export function TempWeatherComponent({weatherId, temp} : ITempWeatherProps) {
  return (
    <div className="temp-weather-block">
          <div className="weather-icon">
            <WeatherIcon weatherId={weatherId}/>
          </div>
          <div className="temp-value">
            <div className="temp-value-celsius">{Math.round(temp)}°C</div>
            <div className="temp-value-fahrenheit">{Math.round((Math.round(temp)  * 1.8) + 32)}°F</div>
          </div>
        </div>
  );
}
