import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// 監測redux中的狀態改變，如果改變重新渲染Ａpp組件
store.subscribe(()=>{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})