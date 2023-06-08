import dayjs from 'dayjs';
import '../../../styles/daily.css';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import {weekly} from '../../../auth/authService'

interface Slot {
    id: number;
    startTime: string;
    endTime: string;
    status: number;
    bookingBy?: null | string;  // adjust the type of `bookingBy` as needed
  }


export const Daily = () => {
  const daily = useSelector((state: any) => state.dailyHours.ar);
  const startTime = daily.map((item: any) => item.startTime);
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])


  const handleClick = (index: any) => {
    setActive(index);
  };
  const days = [
    { name: 'Monday', number: 1 },
    { name: 'Tuesday', number: 2 },
    { name: 'Wednesday', number: 3 },
    { name: 'Thursday', number: 4 },
    { name: 'Friday', number: 5 },
    { name: 'Saturday', number: 6 },
    { name: 'Sunday', number: 7 },
  ];

 const slots = useCallback(async ()=>{
     setIsLoading(true)
     const arr = await weekly();
     setData(arr)
     setIsLoading(false)
 },[])

  useEffect(()=>{
    slots().then()
  },[slots])

  const today = dayjs().format('YYYY-MM-DD')
  const todaysSlots = data.filter((slot:Slot)=>{
    const slotDay = dayjs(slot.startTime).format('YYYY-MM-DD');
    return slotDay === today;
  })


  const weeksSlots:any = {};
  for(let i = 0; i<7; i++){
    const day = dayjs().add(i, 'day').format('YYYY-MM-DD');
    weeksSlots[i] = day;
  }

  const currentDayName = dayjs().format('ddd');
  const currentDayNumber = dayjs().format('DD');
  return (
    <div style={{width:"40%"}}>
      <div className="weekly">
        {days.map((item: any, index: any) => (
          <div className="weekly__item_day" key={index}>
            <span className="item_title">{currentDayName}</span>
            <div className="item_title-number">{currentDayNumber}</div>
          </div>
        ))}
      </div>

      <div className="weekly">
        {days.map((item: any, outerIndex: any) => (
          <ul className="item_time" key={outerIndex}>
            {todaysSlots.map((item: any, innerIndex: any) => (
              <li
                key={outerIndex*startTime.length +  innerIndex}
                onClick={() => handleClick(outerIndex*startTime.length +  innerIndex)}
                className={`item_time-el ${
                  active === outerIndex*startTime.length+innerIndex && 'item_time-el__active'
                }`}
              >
                {dayjs(item.startTime).format('HH:mm')}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <Button onClick={()=> weekly()}>Start</Button>
    </div>
  );
};
