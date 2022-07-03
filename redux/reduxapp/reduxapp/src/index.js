import React  from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {Provider} from 'react-redux'
import reducer from './reducers/rootReducers'

import './index.css'
import App from './App'

import * as serviceWorker from './serviceWorker'

const store=createStore(reducer)

ReactDOM.render(
    <App></App>,
document.getElementById('root'))

serviceWorker.unregister()
