import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Modal = () => {
  const { isModelOpen, closeModel } = useGlobalContext()
  return (
    <div
      className={`${
        isModelOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModel}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
