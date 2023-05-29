import CalHeader from "./cal-header";
import CalMonitor from "./cal-monitor";
import CalGrid from "./cal-grid";
import {add, startOfMonth, startOfWeek, format} from "date-fns";
import styled from "styled-components";

const Calendar = () => {
	const days: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const shortDays: string[] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	const startDay: Date = startOfWeek(startOfMonth(new Date()));
	const totalDays = 42;
	let day = startDay;
	const daysArray: Date[] = [...Array(totalDays)].map(() => {
		const currentDay = day;
		day = add(day, { days: 1 });
		return currentDay;
	});
	const currentMonth: string = format(new Date,'MMMM');
	const currentYear: string = format(new Date,'yyyy');
	return (
		<CalendarWrapper>
			<CalHeader />
			<CalMonitor currentMonth={currentMonth} currentYear={currentYear} />
			<CalGrid daysArray={daysArray}/>
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
