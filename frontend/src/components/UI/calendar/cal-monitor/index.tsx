import styled from "styled-components";
import {FC} from "react";
import moment from "moment";

const CalMonitor:FC<WithProps> = ({today, prevMonthHandler, todayHandler, nextMonthHandler}) => {
	return (
		<DivWrapper>
			<div>
				<TitleWrapper>{today.format('MMMM')}</TitleWrapper>
				<TextWrapper>{today.format('YYYY')}</TextWrapper>
			</div>
			<div>
				<ButtonWrapper onClick={prevMonthHandler}> &lt;</ButtonWrapper>
				<TodayButton onClick={todayHandler}>Today</TodayButton>
				<ButtonWrapper onClick={nextMonthHandler}> &gt; </ButtonWrapper>
			</div>
		</DivWrapper>
	);
};
export default CalMonitor;
interface WithProps {
	today: moment.Moment
	prevMonthHandler: ()=> void
	todayHandler: ()=> void
	nextMonthHandler: ()=> void
}
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(59,57,54);
  color: #dcdddd;
  padding: 16px;
`
const TextWrapper = styled.span`
  font-size: 32px;
`
const TitleWrapper = styled(TextWrapper)`	  
  font-weight: bold;
  margin-right: 8px;
`
const ButtonWrapper = styled.button`
  background-color: rgb(103,100,97);
  color: #E6E6E6;
  border: unset;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  cursor: pointer;
  outline: unset;
`
const TodayButton = styled(ButtonWrapper)`
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bold;
`
