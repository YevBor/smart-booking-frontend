import dayjs,{Dayjs} from 'dayjs';
import '../../../styles/daily.css';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { weekly } from '../../../auth/authService';
import { connectStorageEmulator } from 'firebase/storage';

interface Slot {
  id: number;
  startTime: string;
  endTime: string;
  status: number;
  bookingBy: null | string; // adjust the type of `bookingBy` as needed
}

export const Daily = () => {
  const daily = useSelector((state: any) => state.dailyHours.ar);
  const startTime = daily.map((item: any) => item.startTime);
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([{}]);

  const handleClick = (index: any) => {
    setActive(index);
  };

  
  const slots = useCallback(async () => {
    setIsLoading(true);
    const arr = await weekly();
    setIsLoading(false);

  //   // Get the start of the current day
  //   const today = dayjs().startOf('day');

  //  // Calculate the start and end of the week based on today
  //   const currentWeekStart = today;
  //   const currentWeekEnd = today.add(7, 'day');
  //   console.log(currentWeekEnd)

  //   // Filter slots for the current week
  //   const currentWeekSlots = arr.filter((slot:any) =>
  //     dayjs(slot.startTime).isBetween(currentWeekStart, currentWeekEnd, null, '[]')
  //   );

  //   setData(currentWeekSlots);
  
  //   for(let i = 0; i <7 ; i++){
  //     const newData= arr.filter((item:any) =>{ 
  //       return item.startTime === weeksSlots[i][2]? item: null;
  //     })

  //   }

    const filterSlotsForCurrentWeek =((arr:any)=>{
      const today = dayjs().startOf('day');
      const currentWeek ={
        start:today,
        end: today.add(7,'day')
      }
      const currentWeekSlots= []
      for(let i = 0; i<7; i++){
        const currentDaySlots= arr.filter((slot:any)=>
          dayjs(slot.startTime).isSame(currentWeek.start.add(i, 'day'),'day')
        );
        currentWeekSlots.push({
          day: currentWeek.start.add(i,'day').format('YYYY-MM-DD'),
          slots:currentDaySlots
        })
      }
      return currentWeekSlots
    })
    const currentWeekSlots = filterSlotsForCurrentWeek(arr)
    console.log(currentWeekSlots)
    setData(currentWeekSlots)
  }, []);



  useEffect(() => {
    slots();
  }, [slots]);

  const today = dayjs().format('YYYY-MM-DD');
  const weeksSlots: any = [];
  for (let i = 0; i < 7; i++) {
    const day = dayjs().add(i, 'day').format('ddd,D,YYYY-MM-DD').split(',');
    weeksSlots.push(day);
  }
  const todaysSlots = data.filter((slot: Slot) => {
    const slotDay = dayjs(slot.startTime).format('YYYY-MM-DD');
    return slotDay === today;
  });



  return (
    <div style={{ width: '40%' }}>
      <div className="weekly">
        {weeksSlots.map((item: any, index: any) => (
          <div className="weekly__item_day" key={index}>
            <span className="item_title">{item[0]}</span>
            <div className="item_title-number">{item[1]}</div>
          </div>
        ))}
        {/* {data.map((item:any,index)=>(
                <div className="weekly__item_day" key={index}>
                    <span className="item_title">{item[0]}</span>
                    <div className="item_title-number">{item[1]}</div>
                </div>
        ))} */}
      </div>

      <div className="weekly">
        {data.map((innerItem: any, outerIndex: any) => (
          <ul className="item_time" key={outerIndex}>
            {console.log(innerItem)}
            {data.map((item: any, innerIndex: any) => (
              <li
                key={outerIndex * startTime.length + innerIndex}
                onClick={() =>
                  handleClick(outerIndex * startTime.length + innerIndex)
                }
                className={`item_time-el ${
                  active === outerIndex * startTime.length + innerIndex &&
                  'item_time-el__active'
                }`}
              >
                {item.day}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <Button onClick={() => weekly()}>Start</Button>
    </div>
  );
};
