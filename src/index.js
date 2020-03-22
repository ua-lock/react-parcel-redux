import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import appStore from './_store'
import App from './App.js'
import '@babel/polyfill'
import 'bulma/css/bulma.min.css'

ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root'))
