import styled from "styled-components";
import { FC } from "react";
import moment from "moment";
import {OpenedSlots} from "../calendar.tsx";

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
		const matchingSlots = processedOpenedDays.filter(openedDay =>
			day.isBetween(openedDay.startTime, openedDay.endTime, 'day', '[]')
		);
		return matchingSlots.length > 0 ? matchingSlots : null;
	};
	const getDayContent = (day: moment.Moment) => {
		const openedDaySlots = isOpenedDay(day);
		if (openedDaySlots) {
			return openedDaySlots.map((ods)=>(
				<ListWrapper key={ods.id}>
						<ListItemWrapper status={ods.status}>
							{moment(ods.startTime).format('HH:mm')} - {moment(ods.endTime).format('HH:mm')}
						</ListItemWrapper>
				</ListWrapper>
			));
		} else {
			return '';
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
								<ShowDayWrapper>
									<SlotWrapper>
										<ul style={{paddingLeft:'20px'}}>
											{getDayContent(dayItem)}
										</ul>
									</SlotWrapper>
									<DayWrapper onClick={()=>{console.log(dayItem)}}>
											{!isCurrentDay(dayItem) && dayItem.format('D')}
											{isCurrentDay(dayItem) &&(<CurrentDay>{dayItem.format('D')}</CurrentDay>)}
									</DayWrapper>
								</ShowDayWrapper>
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

const SlotWrapper = styled.div`
  font-size: 0.8rem;
  align-self: center;
  padding: 8px;
  height: 100px;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
const ListWrapper = styled.li`	  
  margin: unset;
  list-style-type: none;
  width: 100%;
`
const ListItemWrapper = styled.button<{status: number}>`	  
  position: relative;
  left: -14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 114px;
  border: unset;
  background: ${(props)=> props.status > 0 ? 'rgb(51,170,219)':'unset'};
  color: #DDDDDD;
  cursor: pointer;
  margin-top: 2px;
  padding: 4px;
  border-radius: 4px;
  text-align: left;
`
const RowInCell = styled.div<{justifyContent: string, pr?:number }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props)=> props.justifyContent ? props.justifyContent :'flex-start'};
  ${(props)=> props.pr && `padding-right:${props.pr * 8}px`}
`;

const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
`

const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
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
  	min-height: ${props => props.isHeader ? 24:  100 }px;
  	background-color: ${(props) => (props.isWeekend ? 'rgb(47,45,42)': 'rgb(41,38,33)')};
  	color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;


