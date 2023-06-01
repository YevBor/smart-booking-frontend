import dayjs from 'dayjs';
import '../../../styles/daily.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';





export const Daily = () => {
  const daily = useSelector((state: any) => state.dailyHours.ar);
  const startTime = daily.map((item: any) => item.startTime);
  const [active, setActive] = useState(false);
  console.log(startTime);
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
            {startTime.map((item: any, innerIndex: any) => (
              <li
                key={outerIndex*startTime.length +  innerIndex}
                onClick={() => handleClick(outerIndex*startTime.length +  innerIndex)}
                className={`item_time-el ${
                  active === outerIndex*startTime.length+innerIndex && 'item_time-el__active'
                }`}
              >
                {dayjs(item).format('HH:mm')}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
