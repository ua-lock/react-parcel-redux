import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Modal = ({ title, content }) => {
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.modal)

  if (!modal) return null

  return (
    <div className='modal is-active'>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{title}</p>
          <button
            className='delete'
            aria-label='close'
            onClick={() => dispatch({ type: 'MODAL_TOGGLE' })}
          ></button>
        </header>
        <section className='modal-card-body'>{content}</section>
        <footer className='modal-card-foot'>
          <button
            className='button is-dark'
            onClick={() => dispatch({ type: 'MODAL_TOGGLE' })}
          >
            Accept
          </button>
          <button
            className='button'
            onClick={() => dispatch({ type: 'MODAL_TOGGLE' })}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
