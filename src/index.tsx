import React from 'react'
import ReactDOM from 'react-dom'

import './common/styles/base.sass'

import MobxProvider from './stores/MobxProvider'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
      <MobxProvider>
        <App />
      </MobxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
