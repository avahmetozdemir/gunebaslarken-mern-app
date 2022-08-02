import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

function Time() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const now  = new Date()
  const day = now.getDay()
  const month = now.getMonth()
  const year = now.getFullYear()
  const hour =  String(now.getHours()).padStart(2,'0')
  const minutes =  String(now.getMinutes()).padStart(2,'0')
  const seconds = String(now.getSeconds()).padStart(2,'0')
 
  const MONTHS =  [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ]
  

  return (

    <section className="timer">
      <div className="datetime">
        <div className="date">
          <span className="daynum">{day} </span>
          <span className="month">{MONTHS[month]} </span>
          <span className="year">{year}</span>
        </div>
        <div className="time">
          <span className="hour">{hour}</span>: <span id="minutes">{minutes}</span>:
          <span className="seconds">{seconds}</span>
        </div>
      </div>
    </section>
  );
}

export default Time