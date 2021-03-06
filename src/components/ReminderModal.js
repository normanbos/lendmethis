import React from 'react'
import { ReminderMailer } from './ReminderMailer'
import Modal from 'react-modal'

export default function ReminderModal({
  item,
  modalIsOpen,
  closeModal,
  mailCreds,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={StyledModal}
    >
      <div>
        <p>
          Sende eine freundliche Erinnerung an <b>{item.borrower}</b>{' '}
          <small>&#40;{item.contact}&#41;</small>:
        </p>
        <ReminderMailer
          item={item}
          closeModal={closeModal}
          mailCreds={mailCreds}
        />
      </div>
    </Modal>
  )
}

const StyledModal = {
  content: {
    display: 'grid',
    gridTemplateRows: 'auto 70px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    minWidth: '19em',
    marginRight: '-40%',
    borderRadius: '12px',
    background: '#cb7350',
    transform: 'translate(-50%, -50%)',
  },
}
