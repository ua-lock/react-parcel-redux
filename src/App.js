import React from 'react'
import { useDispatch } from 'react-redux'

import Modal from './components/Modal'

const App = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal
        title='Cool modal ✨'
        content='This sample application uses Bulma CSS framework for better looks, if you got something better in mind, just do *npm uninstall bulma* and remove its import in the index.js file.'
      />
      <section className='hero is-light is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>
              React & Redux with Parcel!
            </h1>
            <h1 className='subtitle has-text-centered'>
              Zero configuration project boilerplate for a React front-end
              application.
            </h1>
          </div>
        </div>
      </section>
      <section className='section'>
        <p>
          Parcel brings the comodity of not having to set up complex webpack
          configuration file, which requires implementation of other independent
          modules to work as desired. Ideal for small or simple projects!
        </p>
        <br />
        <p>
          This boilerplate project comes with Redux (application state
          management) implemented with use of Hooks (react-redux package), and a
          sample modal trigger that uses said state to better illustrate the{' '}
          <em>application state</em>.
        </p>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <button
            className='button is-dark is-outlined'
            onClick={() => dispatch({ type: 'MODAL_TOGGLE' })}
          >
            Bring Modal
          </button>
        </div>
        <br />
        <p className='has-text-centered'>
          Like it? Get started now, <a>here</a>!
        </p>
      </section>
    </>
  )
}

export default App
