import React,{useContext} from 'react'
import { Mycontext } from './componentA';

const Consumerd = () => {
   const user =useContext(Mycontext)
  return (
    <div>Consumerd is {user}</div>
  )
}

export default Consumerd;