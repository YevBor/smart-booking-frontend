import '../../../styles/daily.css'
import { Button } from '@mui/material'
import dayjs from 'dayjs'
import useSlots from '../../../hooks/useSlots'

export const Daily = () => {
  const { data, handleClick, slots, active, isLoading } = useSlots()

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{ width: '40%' }}>
      <div className='weekly'>
        {data.map((innerItem: any, outerIndex: any) => (
          <div key={outerIndex}>
            <div className='weekly'>
              <div className='weekly__item_day' key={outerIndex}>
                <span className='item_title'>{innerItem.day}</span>
                <div className='item_title-number'>{innerItem.dayNumber}</div>
              </div>
            </div>

            <ul className='item_time'>
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
  )
}
