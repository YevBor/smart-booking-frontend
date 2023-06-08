import dayjs, { Dayjs } from 'dayjs';
import '../../../styles/daily.css';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { weekly } from '../../../auth/authService';



export const Daily = () => {
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([{ day: '', dayNumber: '', slots: [] }]);

  const handleClick = (index: any) => {
    setActive(index);
  };

  const slots = useCallback(async () => {
    setIsLoading(true);
    const arr = await weekly();
    console.log(arr)
    
    const filterSlotsForCurrentWeek = (arr: any) => {
      const today = dayjs().startOf('day');
      const currentWeek = {
        start: today,
        end: today.add(7, 'day'),
      };
      const currentWeekSlots = [];
      for (let i = 0; i < 7; i++) {
        const currentDaySlots = arr.filter((slot: any) =>
          dayjs(slot.startTime).isSame(currentWeek.start.add(i, 'day'), 'day')
        );
        currentWeekSlots.push({
          day: currentWeek.start.add(i, 'day').format('ddd'),
          dayNumber: currentWeek.start.add(i, 'day').format('D'),
          slots: currentDaySlots,
        });
      }
      return currentWeekSlots;
    };
    const currentWeekSlots = filterSlotsForCurrentWeek(arr);
    setData(currentWeekSlots);
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    slots();
  }, [slots]);

  return (
    <div style={{ width: '40%' }}>
      <div className="weekly">
        {data.map((innerItem: any, outerIndex: any) => (
          <div>
            <div className="weekly">
              <div className="weekly__item_day" key={outerIndex}>
                <span className="item_title">{innerItem.day}</span>
                <div className="item_title-number">{innerItem.dayNumber}</div>
              </div>
            </div>

            <ul className="item_time" key={outerIndex}>
              {innerItem.slots.map((item: any, innerIndex: any) => (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`item_time-el ${
                    active === item.id && 'item_time-el__active'
                  }`}
                >
                  {dayjs(item.startTime).format('HH:mm')}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Button onClick={() => weekly()}>Start</Button>
    </div>
  );
};
