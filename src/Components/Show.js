import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addUserName, removeUserName } from '../redux/StudentSlice';

export default function Show() {
  var name = useRef()

  var dispatch = useDispatch()

  var addName = ()=>{
    var nm = name.current.value
    console.log(nm);
    dispatch(addUserName(nm))
  }
  var removeName = ()=>{
    var nm = name.current.value
    console.log(nm);
    dispatch(removeUserName(nm))
  }

  return (
    <>
    <h1>Show component called</h1>
    <div>
      <input type="text" placeholder='Enter name' name="" id="" ref={name} />&nbsp; &nbsp;
      <button onClick={addName} >Add name</button> &nbsp; &nbsp;
      <button onClick={removeName}>Remove name</button>
    </div>
    </>
  )
}
