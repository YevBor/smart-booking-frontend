import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import moment from 'moment';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { OpenedSlots } from '../../../../utils/interfaces';
import { styleBox } from './styles';

const ClientInfoModal: FC<ClientInfoModalInterface> = ({
    openModal,
    closeModal,
    selectedSlot,
}) => {
    return (
        selectedSlot && (
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
                    <Box sx={styleBox}>
                        {selectedSlot?.bookingBy?.user.email && (
                            <div>
                                User Mail:{' '}
                                <strong>
                                    {selectedSlot?.bookingBy?.user.email}
                                </strong>
                            </div>
                        )}

                        <div>
                            Start Time:{' '}
                            <strong>
                                {moment(selectedSlot.startTime).format(
                                    'MMMM Do YYYY, HH:mm'
                                )}
                            </strong>
                        </div>

                        <div>
                            End Time:{' '}
                            <strong>
                                {moment(selectedSlot.endTime).format(
                                    'MMMM Do YYYY, HH:mm'
                                )}
                            </strong>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        )
    );
};

export default ClientInfoModal;
interface ClientInfoModalInterface {
    openModal: boolean;
    closeModal: () => void;
    selectedSlot: OpenedSlots;
}
