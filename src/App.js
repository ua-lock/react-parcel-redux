import React from 'react'
import { useDispatch } from 'react-redux'

import Modal from './components/Modal'

const App = () => {

    const dispatch = useDispatch()

  return (
    <section className="section">
      <Modal title="Test modal" content="This modal is made using Redux global state as a flag for displaying its content."/>
      <h1 className="title has-text-primary">React Parcel Starter</h1>
      <button 
        className="button is-primary is-outlined" 
        onClick={() => dispatch({type: 'MODAL_TOGGLE'})}
        >
            Bring Modal
        </button>
    </section>
  )
}

export default App
