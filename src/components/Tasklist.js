import React from 'react'
import { useSelector } from 'react-redux'
import Taskcard from './Taskcard'

const Tasklist = () => {
    const {todos}=useSelector(state=>state);
  return (
    <div>
    {
        React.Children.toArray(todos.map(el=><Taskcard task={el}/>))
    }
    </div>
  )
}

export default Tasklist
