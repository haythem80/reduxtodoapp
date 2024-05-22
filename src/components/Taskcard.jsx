import React from 'react'
import { useDispatch } from 'react-redux'
import { handlecomplete, handledelete } from '../Redux/action'
import Edittask from './Edittask'

const Taskcard = ({task}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <h1> {task.action} </h1>
        <button onClick={()=>dispatch(handledelete(task.id))}>Delete</button>
        <button onClick={()=>dispatch(handlecomplete(task.id))}>{task.isDone?"undo":"complete"}</button>
        <Edittask task={task}/>
        <hr />
    </div>
  )
}

export default Taskcard