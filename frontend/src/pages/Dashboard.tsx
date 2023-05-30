import React from 'react'
import {WorkingHours} from '../components/workingHours/WorkingHours'
import { Daily } from '../components/UI/clientCalendar/Daily'

const Dashboard = () => {
  return (
    <>
      <WorkingHours/>
      <Daily/>
    </>
  )
}

export default Dashboard