import CalHeader from "./cal-header";
import CalMonitor from "./cal-monitor";
import CalGrid from "./cal-grid";
import moment from "moment";
import styled from "styled-components";
import {useState} from "react";

const Calendar = () => {
	const [today, setToday] = useState(moment());
	const startDay: moment.Moment = today.clone().startOf('month').startOf('week');
	const prevMonthHandler = ():void => setToday((prev:any) => prev.clone().subtract(1,'month'));
	const todayHandler = ():void => setToday(moment())
	const nextMonthHandler = ():void => setToday((next:any)=> next.clone().add(1,'month'));

	return (
		<CalendarWrapper>
			<CalHeader />
			<CalMonitor
				today={today}
				prevMonthHandler={prevMonthHandler}
				todayHandler={todayHandler}
				nextMonthHandler={nextMonthHandler}
			/>
			<CalGrid startDay={startDay}/>
		</CalendarWrapper>
	);
};

export default Calendar;

const CalendarWrapper = styled.div`
  margin-top: 70px; 
  margin-bottom: 70px;
  border-radius: 8px;
  overflow: hidden;
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`
