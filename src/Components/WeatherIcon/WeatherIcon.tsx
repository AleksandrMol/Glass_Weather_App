import React from 'react';
import { AtmosphereIcon } from '../../svg/AtmosphereIcon';
import { ClearSkyIcon } from '../../svg/ClearSkyIcon';
import { CloudyIcon } from '../../svg/CloudyIcon';
import { DrizzleIcon } from '../../svg/Drizzle';
import { OvercastIcon } from '../../svg/OvercastIcon';
import { RainIcon } from '../../svg/RainIcon';
import { SnowIcon } from '../../svg/SnowIcon';
import { ThunderstormIcon } from '../../svg/ThunderstormIcon';
import './weathericon.css';

interface IWeatherIconProps{
  weatherId: number,
}

export function WeatherIcon({weatherId}: IWeatherIconProps) {
  return (
    <div className='weather-icon'>
    {weatherId === 0 && (
        <span>Weather Icon</span>
      )}
      {weatherId === 800 && (
        <ClearSkyIcon />
      )}

      {(weatherId === 801 || weatherId === 802)  && (
        <CloudyIcon />
      )}
      {(weatherId === 803 || weatherId === 804) && (
        <OvercastIcon />
      )}

      {(
        weatherId === 701 || 
        weatherId === 711 ||
        weatherId === 721 ||
        weatherId === 731 ||
        weatherId === 741 ||
        weatherId === 751 ||
        weatherId === 761 ||
        weatherId === 762 ||
        weatherId === 771 ||
        weatherId === 781
        ) && (
        <AtmosphereIcon />
      )}

      {(
        weatherId === 500 || 
        weatherId === 501 ||
        weatherId === 502 ||
        weatherId === 503 ||
        weatherId === 504 ||
        weatherId === 511 ||
        weatherId === 520 ||
        weatherId === 521 ||
        weatherId === 522 ||
        weatherId === 531
        ) && (
        <RainIcon />
      )}

      {(
        weatherId === 600 || 
        weatherId === 601 ||
        weatherId === 602 ||
        weatherId === 611 ||
        weatherId === 612 ||
        weatherId === 613 ||
        weatherId === 615 ||
        weatherId === 616 ||
        weatherId === 620 ||
        weatherId === 621 ||
        weatherId === 622
        ) && (
        <SnowIcon />
      )}

      {(
        weatherId === 300 || 
        weatherId === 301 ||
        weatherId === 302 ||
        weatherId === 310 ||
        weatherId === 311 ||
        weatherId === 312 ||
        weatherId === 313 ||
        weatherId === 314 ||
        weatherId === 321
        ) && (
        <DrizzleIcon />
      )}
      
      {(
        weatherId === 200 || 
        weatherId === 201 ||
        weatherId === 202 ||
        weatherId === 210 ||
        weatherId === 211 ||
        weatherId === 212 ||
        weatherId === 221 ||
        weatherId === 230 ||
        weatherId === 231 ||
        weatherId === 232 
        ) && (
        <ThunderstormIcon />
      )}
    </div>
  );
}
