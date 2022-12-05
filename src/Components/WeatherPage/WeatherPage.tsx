import React from 'react';
import axios from 'axios';
import { Clock } from '../Clock';
import { MainHeader } from '../MainHeader';
import { TempWeatherComponent } from '../TempWeatherComponent';
import './weatherpage.css';
import './bgThemes.css';
import { Arrow } from '../../svg/Arrow';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { TWeatherData } from '../../types';
import { DirectionIcon } from '../../svg/DirectionIcon';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
          selectWeather,
          fetchWeatherGeter
} from '../../features/weather/weatherSlise';
import { LoadingScreen } from '../LoadingScreen';


interface IWeatherpageProps{
  city: string,
}

export function WeatherPage({city}: IWeatherpageProps) { 
  
  const [fakeLoading, setFakeLoading] = React.useState(false);

  const weatherData = useAppSelector(selectWeather);
  const dispatch = useAppDispatch()

  const loadChange = () => {
    setFakeLoading(!fakeLoading);
  };

  if(city !== '') {
    sessionStorage.setItem('cityName', city);
  } // Я сделал это,чтобы при обновлении страницы не вылетала ошибка
  const apiKey = '732c6245e247b301465571f1ef86fcab';
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${sessionStorage.getItem('cityName')}&lang=eng&units=metric&appid=${apiKey}`;
 
  React.useEffect(() => { //кидаем в состояние то, что нам нужно.
    dispatch(fetchWeatherGeter(weatherApi));
    setFakeLoading(true);
  },[]);
  
  const backHandle = () => {
    const backButton = document.querySelector('.back-link') as HTMLLinkElement;
    setFakeLoading(false);;
    setTimeout(() => {
      backButton.click();
    }, 1000);
  }
 console.log((weatherData.weather.weatherId) === 0);
  return (
    <Transition
    in = {fakeLoading}
    timeout = {100}
    >
      {state => 
        <section className={`weather-page weather-${weatherData.weather.weatherId}`}>
        <div className={`container weather-container ${state}`}>
          <MainHeader text_1={`Weather in ${weatherData.weather.name}`}/>
          
          <TempWeatherComponent weatherId={weatherData.weather.weatherId} temp = {weatherData.weather.temp}/>

          <h2 className="weather-description">
            {weatherData.weather.description}
          </h2>

          <ul className="other-data-list">
            <li className="other-data-item">
              Wind 
              <span>
                {' ' + Math.round(weatherData.weather.wind.speed)} m/sec {' '} 
              </span>
              <div className="direction-icon" style={{rotate: `${weatherData.weather.wind.deg}deg`}}>
                <DirectionIcon/>
              </div>
            </li>

            <li className="other-data-item">
              Pressure 
              <span>
                {' ' + Math.round((weatherData.weather.pressure) * 0.75)} mm
              </span>
            </li>

            <li className="other-data-item">
              Humidity 
              <span>
                {' ' + weatherData.weather.humidity} %
              </span>
            </li>
          </ul>  

          <div className='back-arrow' onClick={backHandle}>
            <Arrow/>
          </div>
        </div>

        <div className={`clock-block ${state}`}>
          <Clock/>
        </div>
        
        <Link to='/'  className={'back-link'}></Link>
        <LoadingScreen pageLoading={(weatherData.weather.weatherId) === 0}/>
      </section>
      }
      
    </Transition>
    
  );
}