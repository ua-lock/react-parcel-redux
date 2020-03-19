import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.js'
import '@babel/polyfill'
import 'bulma/css/bulma.min.css'

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'))
