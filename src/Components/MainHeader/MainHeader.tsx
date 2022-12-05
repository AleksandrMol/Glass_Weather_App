import React from 'react';
import './mainheader.css';

interface IMainHeaderProps{
  img?: string,
  text_1: string,
  text_2?: string,
}

export function MainHeader({img, text_1, text_2}: IMainHeaderProps) {
  return (
    <div className='header-block'>
      <h1 className='header'>
        <div>
          {text_1}
        </div>
        {text_2 && (
          <div>
            {text_2}
          </div>
        )
        }
      </h1>
      
      {img &&(
        <img className='header-img' src={img} alt="img" />
      )}
    </div>
  );
}
