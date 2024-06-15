import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { Creater } from './components/Creater.jsx'
import { store } from './redux/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Provider store={store}>
    <Creater>
      <App/>
    </Creater>
   </Provider>
  </BrowserRouter>
)
