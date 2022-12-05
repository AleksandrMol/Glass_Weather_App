import React, { useState } from 'react';
import './loadingscreen.css';
import { Transition } from 'react-transition-group';

interface ILocationScreenProps{
  pageLoading: boolean;
}

export function LoadingScreen({pageLoading}: ILocationScreenProps) {

  return (
    <Transition
    in = {pageLoading}
    timeout = {500}
    >
      {state => 
      <div className={`loading-screen ${state}`}>     
        <h1 id='loading-screen-header-1' className={`loading-screen-header `}>
          Wait please
        </h1>

        <h1 id='loading-screen-header-2' className={`loading-screen-header `}>
          loading in progress
        </h1> 
      </div>
      }
      
    </Transition>
  );
}
