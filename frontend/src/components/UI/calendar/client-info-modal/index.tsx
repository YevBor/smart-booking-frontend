import React, {FC} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {OpenedSlots} from "../calendar.tsx";
import moment from "moment";
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

interface ClientInfoModalInterface {
	openModal: boolean,
	closeModal: ()=> void,
	selectedSlot: OpenedSlots,
}
const ClientInfoModal: FC<ClientInfoModalInterface> = ({openModal, closeModal, selectedSlot}) => {
	return selectedSlot && (
		<Modal
			open={openModal}
			onClose={closeModal}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={openModal}>
			<Box sx={style}>
				{selectedSlot?.bookingBy?.user.email && (<div>
					User Mail: <strong>{selectedSlot?.bookingBy?.user.email}</strong>
				</div>)}

				<div>
					Start Time: <strong>{moment(selectedSlot.startTime).format('MMMM Do YYYY, HH:mm')}</strong>
				</div>

				<div>
					End Time: <strong>{moment(selectedSlot.endTime).format('MMMM Do YYYY, HH:mm')}</strong>
				</div>
			</Box>
			</Fade>
		</Modal>
	)
};

export default ClientInfoModal;
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
