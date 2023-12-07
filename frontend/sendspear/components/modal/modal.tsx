import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { ModalProps } from '@/types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 840,
  height:200,
  bgcolor: 'white',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const modal: React.FC <ModalProps> = ({children , open  , handleClose, size })  => {
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
            {children}
        </Box>
      </Modal>
    </div>
  );
}
export default modal