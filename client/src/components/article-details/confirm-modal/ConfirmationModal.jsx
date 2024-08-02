import React from 'react';
import Modal from 'react-modal';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Confirmation</h2>
      <p>{message}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onConfirm}>
          Yes
        </button>
        <button className={styles.button} onClick={onRequestClose}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
