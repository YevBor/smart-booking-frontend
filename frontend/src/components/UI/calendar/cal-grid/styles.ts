import styled from "styled-components";
export const SlotWrapper = styled.div`
  font-size: 0.8rem;
  align-self: center;
  padding: 8px;
  height: 95px;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
export const ListWrapper = styled.li`	  
  margin: unset;
  list-style-type: none;
  width: 100%;
`
export const ListItemWrapper = styled.button<{status: number}>`	  
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
  text-align: center;
`
export const RowInCell = styled.div<{justifyContent: string, pr?:number }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props)=> props.justifyContent ? props.justifyContent :'flex-start'};
  ${(props)=> props.pr && `padding-right:${props.pr * 8}px`}
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
`

export const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GridWrapper = styled.div<{isHeader: boolean}>`
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
	isOpened?: any;
}
export const CellWrapper = styled.div<CellWrapperProps>`
	min-width: 140px;
  	min-height: ${props => props.isHeader ? 24:  95 }px;
  	background-color: ${(props) => (props.isWeekend ? 'rgb(47,45,42)': 'rgb(41,38,33)')};
  	color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;


