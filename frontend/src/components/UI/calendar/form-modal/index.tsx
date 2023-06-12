import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { WorkingHours } from '../../../workingHours/WorkingHours.tsx'
import { FC } from 'react'
import moment from 'moment/moment'
import { styleBoxFormModal } from './styles.ts'

const FormModal: FC<FormModalProps> = ({ open, handleClose, selectedDay }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styleBoxFormModal}>
        <WorkingHours selectedDay={selectedDay} />
      </Box>
    </Modal>
  )
}
export default FormModal

interface FormModalProps {
  open: boolean
  handleClose: () => void
  selectedDay: moment.Moment | null
}
