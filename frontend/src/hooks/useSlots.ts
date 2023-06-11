import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import { weekly } from '../services/booking/booking'

const useSlots = () => {
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([{ day: '', dayNumber: '', slots: [], month: ''}]);

  let firstDayOftheWeek;
  let lastDayOftheWeek;

  const handleClick = (index: any) => {
    setActive(index);
  };

  const filterSlotsForCurrentWeek = (arr: any) => {
    firstDayOftheWeek = dayjs(arr[0].startTime).startOf('day');
    console.log(firstDayOftheWeek)
    lastDayOftheWeek = firstDayOftheWeek.add(7, 'day').format('YYYY-MM-DD');
    const currentWeek = {
      start: firstDayOftheWeek,
      end: lastDayOftheWeek,
    };
    const currentWeekSlots = [];
    for (let i = 0; i < 7; i++) {
      const currentDaySlots = arr.filter((slot: any) =>
        dayjs(slot.startTime).isSame(currentWeek.start.add(i, 'day'), 'day')
      );
      currentWeekSlots.push({
        day: currentWeek.start.add(i, 'day').format('ddd'),
        dayNumber: currentWeek.start.add(i, 'day').format('D'),
        slots: currentDaySlots,
        month: currentWeek.start.add(i, 'day').format('MMMM'),
      });
    }
    return currentWeekSlots;
  };

  const slots = useCallback(async () => {
    setIsLoading(true);
    const arr = await weekly();
    console.log(arr)
    const currentWeekSlots = filterSlotsForCurrentWeek(arr);
    console.log('currentWeek', currentWeekSlots)
    setData(currentWeekSlots);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    slots();
  }, [slots]);

  return { data, handleClick, slots, active, isLoading, firstDayOftheWeek, lastDayOftheWeek };
};

export default useSlots;
