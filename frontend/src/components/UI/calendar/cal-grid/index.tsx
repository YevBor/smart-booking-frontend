import styled from "styled-components";
import { FC } from "react";
import moment from "moment";

const CalGrid:FC<{startDay: any}> = ({startDay}) => {
	const totalDays = 42;
	const day = startDay.clone().subtract(1, 'day');
	const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())

	const days: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const shortDays: string[] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	const isCurrentDay = (day: Date) => moment().isSame(day, 'day');
	return (
		<GridWrapper>
			{daysMap.map((dayItem: any)=>{
				return (
					<CellWrapper key={dayItem.unix()} isWeekend={dayItem.day() == 5 || dayItem.day() == 6}>
						<RowInCell>
							<DayWrapper>
								{!isCurrentDay(dayItem) && dayItem.format('D')}
								{isCurrentDay(dayItem) &&(<CurrentDay>{dayItem.format('D')}</CurrentDay>)}
							</DayWrapper>
						</RowInCell>
					</CellWrapper>
				)
			})}
		</GridWrapper>
	);
};

export default CalGrid;
const CurrentDay = styled.div`
  height: 80%;
  width: 80%;
  background-color: #f00;
  border-radius: 50%;	  
  display: flex;
  align-items: center;
  justify-content: center;
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: #404040;
`;
interface CellWrapperProps {
	isWeekend?: boolean;
}
const CellWrapper = styled.div<CellWrapperProps>`
	min-width: 140px;
  	min-height: 80px;
  	background-color: ${(props) => (props.isWeekend ? 'rgb(47,45,42)': 'rgb(41,38,33)')};
  	color: #DDDCDD
`;
const RowInCell = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`
