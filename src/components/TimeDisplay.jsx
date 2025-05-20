import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const TimeDisplay = () => {
  const [times, setTimes] = useState({
    barcelona: '',
    newYork: '',
    tokyo: ''
  });

  const updateTimes = () => {
    setTimes({
      barcelona: dayjs().tz('Europe/Madrid').format('HH:mm'),
      newYork: dayjs().tz('America/New_York').format('HH:mm'),
      tokyo: dayjs().tz('Asia/Tokyo').format('HH:mm')
    });
  };

  useEffect(() => {
    updateTimes();
    const interval = setInterval(updateTimes, 60000); // actualiza cada minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col text-white text-xs leading-tight text-right">
      <span>🇪🇸 {times.barcelona}</span>
      <span>🇺🇸 {times.newYork}</span>
      <span>🇯🇵 {times.tokyo}</span>
    </div>
  );
};

export default TimeDisplay;
