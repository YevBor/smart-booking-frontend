import { FC } from "react";
import moment from "moment";
import {
  ButtonWrapper,
  DivWrapper,
  TextWrapper,
  TitleWrapper,
  TodayButton,
} from "./styles";

const CalMonitor: FC<WithProps> = ({
  today,
  prevMonthHandler,
  todayHandler,
  nextMonthHandler,
}) => {
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format("MMMM")}</TitleWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
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
  today: moment.Moment;
  prevMonthHandler: () => void;
  todayHandler: () => void;
  nextMonthHandler: () => void;
}
