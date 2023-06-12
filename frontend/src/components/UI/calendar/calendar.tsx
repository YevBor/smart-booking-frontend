import CalHeader from './cal-header';
import CalMonitor from './cal-monitor';
import CalGrid from './cal-grid';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { OpenedSlots } from '../../../utils/interfaces';
import { requestMonthlySlots } from '../../../services/slots/slots';
import { CalendarWrapper } from './styles';

const Calendar: FC = () => {
    const totalDays = 42;
    const [today, setToday] = useState(moment());
    const startDay: moment.Moment = today
        .clone()
        .startOf('month')
        .startOf('week');
    const prevMonthHandler = (): void =>
        setToday((prev: any) => prev.clone().subtract(1, 'month'));
    const todayHandler = (): void => setToday(moment());
    const nextMonthHandler = (): void =>
        setToday((next: any) => next.clone().add(1, 'month'));

    const [openedDays, setOpenedDays] = useState<OpenedSlots[]>([]);
    useEffect((): void => {
        requestMonthlySlots()
            .then((oSlots: OpenedSlots[]): void => {
                const currentMonthSlots: OpenedSlots[] = oSlots.filter(slot =>
                    moment(slot.startTime)
                        .startOf('month')
                        .isSame(today.startOf('month'))
                );
                setOpenedDays(currentMonthSlots);
            })
            .catch(err => console.log(err));
    }, [today]);

    return (
        <CalendarWrapper>
            <CalHeader />
            <CalMonitor
                today={today}
                prevMonthHandler={prevMonthHandler}
                todayHandler={todayHandler}
                nextMonthHandler={nextMonthHandler}
            />
            <CalGrid
                startDay={startDay}
                today={today}
                totalDays={totalDays}
                openedDays={openedDays}
            />
        </CalendarWrapper>
    );
};

export default Calendar;
