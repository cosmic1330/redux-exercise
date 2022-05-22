import { useRef, useState } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/CountAction'

function Count() {
  const selectDom = useRef<HTMLSelectElement>(null)

  const increatment = () => {
      if(selectDom.current){
        let data = parseInt(selectDom.current.value);
        store.dispatch(createIncrementAction(data))
      }
  }
  const decreatment = () => {
    if(selectDom.current){
        let data = parseInt(selectDom.current.value);
        store.dispatch(createDecrementAction(data))
    }
  }
  const increatmentIfOdd = () => {
    if(selectDom.current && parseInt(selectDom.current.value)%2==0){
      let data = parseInt(selectDom.current.value);
        store.dispatch(createIncrementAction(data))
    }
  }
  const increatmentAsync = () => {
    if(selectDom.current){
      let data = parseInt(selectDom.current.value);
      // store.dispatch(createIncrementAsyncAction(data,500))
    }
  }

  return (
    <div>
      <h1>目前是 {store.getState()}</h1>
      <select ref={selectDom}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button onClick={increatment}>+</button>
      <button onClick={decreatment}>-</button>
      <button onClick={increatmentIfOdd}>基數加</button>
      <button onClick={increatmentAsync}>異步加</button>
    </div>
  )
}

export default Count
