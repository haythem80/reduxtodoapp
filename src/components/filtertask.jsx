import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const filtertask = ({task}) => {
    const [done, setDone] = useState("");
    const dispatch = useDispatch();
    
  return (
    <div>filtertask</div>
  )
}

export default filtertask