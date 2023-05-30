import dayjs from 'dayjs'
import '../../../styles/daily.css'
import {useSelector} from 'react-redux'
import { useState } from 'react'
export const Daily = () =>{
    const daily = useSelector((state:any) => state.dailyHours.ar)
    const startTime = daily.map((item:any) => item.startTime)
    const [active, setActive] = useState(false)
    console.log(startTime)
    const handleClick = () =>{
        setActive(!active)
    }



    return(
        <>
            <div className="item">
                <span className='item_title'>Mon</span>          
                <div className="item_title-number">29</div>
                <ul className='item_time'>
                    {startTime.map((item:any, index:any) => <li onClick={handleClick} key={index} className={`item_time-el ${active && 'item_time-el__active'}`} >{dayjs(item).format('HH:mm')}</li>)}
                    {/* <li className="item_time-el">09:00</li> */}
                </ul>
            </div>
        </>
        


    )
}