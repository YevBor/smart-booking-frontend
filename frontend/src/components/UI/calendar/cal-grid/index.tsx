import styled from "styled-components";
import {FC} from "react";
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
`
const CalGrid:FC<{daysArray:Date[]}> = ({daysArray}) => {

	return (
		<GridWrapper>
			{daysArray.map((dayItem: Date ,i:number)=>{
				return (
					<CellWrapper key={i} isWeekend={dayItem.getDay() == 5 || dayItem.getDay() == 6}>
						<RowInCell>
							<DayWrapper>
								{dayItem.getDate()}
							</DayWrapper>
						</RowInCell>
					</CellWrapper>
				)
			})}
		</GridWrapper>
	);
};

export default CalGrid;