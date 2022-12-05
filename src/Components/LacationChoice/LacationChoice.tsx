import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../../svg/SearchIcon';
import { Clock } from '../Clock';
import { LoadingScreen } from '../LoadingScreen';
import { LocationForm } from '../LocationForm';
import { MainHeader } from '../MainHeader';
import { initialData } from '../../initialData';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import './lacationchoice.css';

interface iLacationChoiceProps{
  timesOfDay: string,
  inputCallback: (value: string) => void,
}

export function LacationChoice({timesOfDay, inputCallback}: iLacationChoiceProps) {
  const [fakeLoading, setFakeLoading] = useState(false);
  const Data = initialData;
  
  const loadChange = () => {
      setFakeLoading(!fakeLoading);
  };
 
  const enterHandle = (e:React.FormEvent) => {
    e.preventDefault()
    const weatherLink = document.querySelector("#toWeather") as HTMLLinkElement;
    const input = document.querySelector('#location') as HTMLInputElement;
    inputCallback(input.value.trim());
    loadChange();
    setTimeout(() => {
      weatherLink.click();
    }, 1000);
  };

  React.useEffect(() => {
    !fakeLoading? loadChange() : console.log();
  }, []);

  return (
    <Transition
      in = {fakeLoading}
      timeout = {100}
    >
      {state => 
        <section className={`location-section location-${timesOfDay}`}>
            <div className={`container location-container ${state}`}>
              <MainHeader img={require(`../../img/${timesOfDay}Icon.png`)} text_1 = {Data[`header ${timesOfDay}_1`]} text_2 = {Data[`header ${timesOfDay}_2`]}/>

              <LocationForm name='location' placeholder='For example Novocherkassk' label='Choose your locality (Possible in Russian)' icon={<SearchIcon/>} required onSubmit= {enterHandle}/>
            </div>

            <div className={`clock-block ${state}`}>
              <Clock/>
            </div>

          {/* <LoadingScreen pageLoading={fakeLoading}/> */}

          <Link id='toWeather' to ='/weatherPage'></Link>
        </section>
      }
    </Transition>
  );
}
