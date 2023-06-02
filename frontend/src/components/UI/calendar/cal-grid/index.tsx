import styled from "styled-components";
import { FC } from "react";
import moment from "moment";
import {OpenedSlots} from "../calendar.tsx";

// This function converts date strings into Moment objects for easier handling
const processOpenedDays = (openedDays: OpenedSlots[]) => {
	return openedDays.map(day => ({
		...day,
		startTime: moment(day.startTime),
		endTime: moment(day.endTime)
	}));
};
const CalGrid:FC<CalGrid> = ({startDay,today,totalDays,openedDays}) => {
	const processedOpenedDays = processOpenedDays(openedDays);

	const day = startDay.clone().subtract(1, 'day');
	const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
	const isCurrentDay = (day: moment.Moment) => moment().isSame(day, 'day');
	const isSelectedMonth = (day: moment.Moment) => today.isSame(day, 'month');

	const isOpenedDay = (day: moment.Moment) => {
		for (const openedDay of processedOpenedDays) {
			if (day.isBetween(openedDay.startTime, openedDay.endTime, 'day', '[]')) {
				return openedDay;
			}
		}
		return null;
	};
	const getDayContent = (day: moment.Moment) => {
		const openedDay = isOpenedDay(day);
		if (openedDay) {
			return `${day.format('D')} - Opened ${openedDay.startTime}`;
		}
		else {
			return isCurrentDay(day) ? <CurrentDay>{day.format('D')}</CurrentDay> : day.format('D');
		}
	};
	return (
		<>
			<GridWrapper isHeader={true}>
				{
					[...Array(7)].map((_, i) => (
						<CellWrapper isHeader key={i} isSelectedMonth={today}>
							<RowInCell justifyContent={'flex-end'} pr={1}>
								{moment().day(i).format('ddd')}
							</RowInCell>
						</CellWrapper>
					))
				}
			</GridWrapper>

			<GridWrapper isHeader={false}>
				{daysMap.map((dayItem: any)=>{
					return (
						<CellWrapper
							key={dayItem.unix()}
							isWeekend={dayItem.day() == 5 || dayItem.day() == 6}
							isSelectedMonth={isSelectedMonth(dayItem)}
						>
							<RowInCell justifyContent={'flex-end'}>
								<DayWrapper>
									{/*{!isCurrentDay(dayItem) && dayItem.format('D')}*/}
									{/*{isCurrentDay(dayItem) &&(<CurrentDay>{dayItem.format('D')}</CurrentDay>)}*/}
									{getDayContent(dayItem)}
								</DayWrapper>
							</RowInCell>
						</CellWrapper>
					)
				})}
			</GridWrapper>
		</>
	);
};

export default CalGrid;
interface CalGrid {
	startDay: moment.Moment,
	today:any,
	totalDays:number,
	openedDays: OpenedSlots[]
}
const CurrentDay = styled.div`
  height: 80%;
  width: 80%;
  background-color: #f00;
  border-radius: 50%;	  
  display: flex;
  align-items: center;
  justify-content: center;
`
const GridWrapper = styled.div<{isHeader: boolean}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props)=> props.isHeader ? 'rgb(47,45,42)':'#404040'};
  ${(props)=> props.isHeader && 'border-bottom: 1px solid #404040'}
`;
interface CellWrapperProps {
	isWeekend?: boolean;
	isHeader?: boolean;
	isSelectedMonth?: ()=> any;
}
const CellWrapper = styled.div<CellWrapperProps>`
	min-width: 140px;
  	min-height: ${props => props.isHeader ? 24:  80 }px;
  	background-color: ${(props) => (props.isWeekend ? 'rgb(47,45,42)': 'rgb(41,38,33)')};
  	color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;
const RowInCell = styled.div<{justifyContent: string, pr?:number }>`
  display: flex;
  justify-content: ${(props)=> props.justifyContent ? props.justifyContent :'flex-start'};
  ${(props)=> props.pr && `padding-right:${props.pr * 8}px`}
`;
const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`
