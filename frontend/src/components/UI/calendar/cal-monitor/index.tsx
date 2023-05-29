import styled from "styled-components";

const CalMonitor = ({currentMonth, currentYear}:{ currentMonth: string, currentYear: string }) => {
	return (
		<DivWrapper>
			<div>
				<TitleWrapper>{currentMonth}</TitleWrapper>
				<TextWrapper>{currentYear}</TextWrapper>
			</div>
			<div>
				<ButtonWrapper> &lt;</ButtonWrapper>
				<TodayButton>Today</TodayButton>
				<ButtonWrapper> &gt; </ButtonWrapper>
			</div>
		</DivWrapper>
	);
};

export default CalMonitor;
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
`
const TodayButton = styled(ButtonWrapper)`
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bold;
`
