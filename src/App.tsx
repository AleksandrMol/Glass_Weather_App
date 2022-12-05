import React from 'react';
import './App.css';
import { LacationChoice } from './Components/LacationChoice';
import { WeatherPage } from './Components/WeatherPage';
import { Routes, Route, } from "react-router-dom";

function App() {
  const [timesOfDay, setTimeOfDay] = React.useState<'dawn' | 'day' | 'sunset' | 'night'>('day'); // От этого состояния зависит тема. You Know? ))
  const [date, setDate] = React.useState(new Date);
  const [inputValue, setInputValue] = React.useState('');
  const html = document.querySelector('html') as HTMLHtmlElement;

  const timeCheacker = () => { //Смотрим, сколько время и применяем тему
    html.removeAttribute('class'); // чистим строку с классами, чтобы не плодились.
    if ((date.getHours() >= 0) && (date.getHours() < 6) && (timesOfDay != 'night')) {
      setTimeOfDay('night');
      return
    }
    if ((date.getHours() >= 6) && (date.getHours() < 12) && (timesOfDay != 'dawn')) {
      setTimeOfDay('dawn');
      return
    }
    if ((date.getHours() >= 12) && (date.getHours() < 18) && (timesOfDay != 'day')) {
      setTimeOfDay('day');
      return
    }
    if ((date.getHours() >= 18) && (date.getHours() < 24) && (timesOfDay != 'sunset')) {
      setTimeOfDay('sunset');
      return
    }
  };
  
  React.useEffect(() => {
    
    timeCheacker();
    
    html.classList.add(timesOfDay);
},);

  const inputCallback = (value:string) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<LacationChoice inputCallback={inputCallback} timesOfDay={timesOfDay}/>}/>
        <Route path='weatherPage' element ={<WeatherPage city={inputValue}/>}/>
      </Routes>
    </div>
  );
}

export default App;
