import React, { useState } from 'react';
import './clock.css';

export function Clock() {
  const [date, setDate] = useState(new Date);
  
  React.useEffect(() => {
    // clearInterval();

    const clockInterval = setInterval(() => {

      setDate(new Date);
    }, 1000);
}, []);

  return (
    <div className="clock">
      {(date.getHours() < 10) ? '0' + date.getHours() : date.getHours()}:{(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}
    </div>
  );
}