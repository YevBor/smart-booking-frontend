import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import { weekly } from '../services/booking/booking';

const useSlots = () => {
    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([{ day: '', dayNumber: '', slots: [] }]);

    const handleClick = (index: any) => {
        setActive(index);
    };

    const filterSlotsForCurrentWeek = (arr: any) => {
        const today = dayjs().startOf('day');
        const currentWeek = {
            start: today,
            end: today.add(7, 'day'),
        };
        const currentWeekSlots = [];
        for (let i = 0; i < 7; i++) {
            const currentDaySlots = arr.filter((slot: any) =>
                dayjs(slot.startTime).isSame(
                    currentWeek.start.add(i, 'day'),
                    'day'
                )
            );
            currentWeekSlots.push({
                day: currentWeek.start.add(i, 'day').format('ddd'),
                dayNumber: currentWeek.start.add(i, 'day').format('D'),
                slots: currentDaySlots,
            });
        }
        return currentWeekSlots;
    };

    const slots = useCallback(async () => {
        setIsLoading(true);
        const arr = await weekly();
        const currentWeekSlots = filterSlotsForCurrentWeek(arr);
        setData(currentWeekSlots);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        slots();
    }, [slots]);

    return { data, handleClick, slots, active, isLoading };
};

export default useSlots;
