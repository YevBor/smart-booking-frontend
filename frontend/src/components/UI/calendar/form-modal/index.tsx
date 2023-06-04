import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {WorkingHours} from "../../../workingHours/WorkingHours.tsx";


const FormModal = ({open, handleClose, selectedDay}: any) => {

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
