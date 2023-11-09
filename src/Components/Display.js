import React from 'react'
import { useSelector } from "react-redux"

export default function Display() {
 const name =  useSelector(state=>state.students.value)
  return (
    <>
    <h1>Display component called</h1>
    {
      name.map((uname)=>{
        return<b>{uname} &nbsp;&nbsp;</b>
      })
    }
    </>
  )
}
