import { FC, useCallback, useMemo, useState } from 'react'
import moment from 'moment'
import FormModal from '../form-modal'
import ClientInfoModal from '../client-info-modal'
import { OpenedSlots } from '../../../../utils/interfaces'
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  ListItemWrapper,
  ListWrapper,
  RowInCell,
  ShowDayWrapper,
  SlotWrapper,
} from './styles'

const CalGrid: FC<CalGrid> = ({ startDay, today, totalDays, openedDays }) => {
  const processOpenedDays = (openedDays: OpenedSlots[]) => {
    return openedDays.map(day => ({
      ...day,
      startTime: moment(day.startTime),
      endTime: moment(day.endTime),
    }))
  }
  const processedOpenedDays = processOpenedDays(openedDays)

  const [selectedDay, setSelectedDay] = useState<moment.Moment | null>(null)
  const handleSelectDay = useCallback(
    (day: moment.Moment) => setSelectedDay(day),
    []
  )

  const day = startDay.clone().subtract(1, 'day')
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
  const isCurrentDay = (day: moment.Moment) => moment().isSame(day, 'day')
  const isSelectedMonth = (day: moment.Moment) => today.isSame(day, 'month')

  const isOpenedDay = useCallback(
    (day: moment.Moment) => {
      const matchingSlots = processedOpenedDays.filter(openedDay =>
        day.isBetween(openedDay.startTime, openedDay.endTime, 'day', '[]')
      )
      return matchingSlots.length > 0 ? matchingSlots : null
    },
    [processedOpenedDays]
  )

  const getDayContent = useCallback(
    (day: moment.Moment) => {
      const openedDaySlots = isOpenedDay(day)
      if (openedDaySlots) {
        return openedDaySlots.map(ods => (
          <ListWrapper key={ods.id}>
            <ListItemWrapper
              status={ods.status}
              onClick={() => {
                setOpenModal(true)
                setSelectedSlot(ods)
              }}
            >
              {moment(ods.startTime).format('HH:mm')} -{' '}
              {moment(ods.endTime).format('HH:mm')}
            </ListItemWrapper>
          </ListWrapper>
        ))
      } else {
        return ''
      }
    },
    [isOpenedDay]
  )

  const openedDaysCache = useMemo(() => {
    return daysMap.map(day => ({
      day,
      isOpened: isOpenedDay(day),
      content: getDayContent(day),
    }))
  }, [daysMap, getDayContent, isOpenedDay])

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedSlot, setSelectedSlot] = useState<any | null>(null)

  return (
    <>
      <GridWrapper isHeader={true}>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader key={i} isSelectedMonth={today}>
            <RowInCell justifyContent={'flex-end'} pr={1}>
              {moment().day(i).format('ddd')}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>

      <GridWrapper isHeader={false}>
        {openedDaysCache.map(({ day, isOpened, content }) => (
          <CellWrapper
            key={day.unix()}
            isWeekend={day.day() == 5 || day.day() == 6}
            isSelectedMonth={isSelectedMonth(day)}
            isOpened={isOpened}
          >
            <RowInCell justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <SlotWrapper>
                  <ul style={{ paddingLeft: '20px' }}>{content}</ul>
                </SlotWrapper>
                <DayWrapper onClick={() => handleSelectDay(day)}>
                  {!isCurrentDay(day) && day.format('D')}
                  {isCurrentDay(day) && (
                    <CurrentDay>{day.format('D')}</CurrentDay>
                  )}
                </DayWrapper>
              </ShowDayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
        <FormModal
          open={selectedDay !== null}
          handleClose={() => setSelectedDay(null)}
          selectedDay={selectedDay}
        />
        <ClientInfoModal
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
          selectedSlot={selectedSlot}
        />
      </GridWrapper>
    </>
  )
}

export default CalGrid
interface CalGrid {
  startDay: moment.Moment
  today: any
  totalDays: number
  openedDays: OpenedSlots[]
}
