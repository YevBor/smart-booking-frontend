import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {WorkingHours} from "../../../workingHours/WorkingHours.tsx";
import {FC} from "react";
import moment from "moment/moment";

interface FormModalProps {
	open: boolean;
	handleClose: () => void;
	selectedDay: moment.Moment | null;
}
const FormModal: FC<FormModalProps> = ({open, handleClose, selectedDay}) => {

	return (
		<Modal
			open={open}
			onClose={handleClose}
		>
			<Box sx={style}>
				<WorkingHours selectedDay={selectedDay}/>
			</Box>
		</Modal>
	);
}
export default FormModal;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
