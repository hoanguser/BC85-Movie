import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movieRedux/redux/movieSlice.js';
import { Provider } from 'react-redux';
let store = configureStore({
  reducer: {
    movieSlice,
  }
})
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
