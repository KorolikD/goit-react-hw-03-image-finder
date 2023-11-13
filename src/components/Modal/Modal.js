import React from 'react';
import { ModalImageWraper } from './Modal.styled';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalImage = ({ onClose, isModalOpen, largeImageURL, tags }) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={onClose}
    style={customStyles}
    contentLabel="Imagecard Modal"
  >
    <ModalImageWraper>
      <img src={largeImageURL} alt={tags} />
    </ModalImageWraper>
  </Modal>
);
