import CalHeader from "./cal-header";
import CalMonitor from "./cal-monitor";
import CalGrid from "./cal-grid";
import {add, startOfMonth, startOfWeek} from "date-fns";
import {Container} from "@mui/material";

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

	return (
		<Container maxWidth="xl" sx={{marginTop:'70px', marginBottom:'70px'}}>
			<CalHeader />
			<CalMonitor />
			<CalGrid
				daysArray={daysArray}/>
		</Container>
	);
};

export default Calendar;
