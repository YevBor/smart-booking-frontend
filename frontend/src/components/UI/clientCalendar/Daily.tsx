import '../../../styles/daily.css';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import useSlots from '../../../hooks/useSlots';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';





export const Daily = () => {
  const { data, handleClick, slots, active, isLoading } = useSlots();
  console.log(data[0].dayNumber);
  // console.log(data[6].dayNumber);
  console.log(data[0].month);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{ width: '40%' }}>
      <div>
        <IconButton sx={{border: "1px solid black",borderRadius: "5px"}}>
          <ArrowBackIosNewIcon/>
        </IconButton>
        <IconButton sx={{border: "1px solid black",borderRadius: "5px"}}>

          <ArrowForwardIosIcon/>
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          { data[0].month + ' ' + data[0].dayNumber + ' - '  + data[6].dayNumber}
        </Typography>
      </div>
      <div className="weekly">
        {data.map((innerItem: any, outerIndex: any) => (
          <div key={outerIndex}>
            <div className="weekly">
              <div className="weekly__item_day" key={outerIndex}>
                <span className="item_title">{innerItem.day}</span>
                <div className="item_title-number">{innerItem.dayNumber}</div>
              </div>
            </div>

            <ul className="item_time" >
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
      <Button onClick={slots}>Start</Button>
    </div>
  );
};
