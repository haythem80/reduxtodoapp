import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleadd } from '../Redux/action';

const Addnewtask = () => {
    const [action, setAction] = useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const task ={
            id:Math.random(),action,isDone:false
        }
        dispatch(handleadd(task))
        setAction("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={action} onChange={e=>setAction(e.target.value)} />
        <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Addnewtask