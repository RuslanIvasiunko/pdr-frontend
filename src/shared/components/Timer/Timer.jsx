'use client';

import { useEffect, useState } from 'react';

const Timer = ({ timerHeader, isActive }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    if (!isActive) {
      setSeconds(0);
      setMinutes(0);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <p>{timerHeader}</p>
      <p>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};

export default Timer;
