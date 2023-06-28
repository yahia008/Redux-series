import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset, resetAmount } from '../app/slice';

const Mycount = () => {

    const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  console.log(count)

  const [inValue, setvalue] = useState(0);

  const addvalue = Number(inValue) || 0;
   const resetAll = ()=> {
    setvalue(0)
    dispatch(reset());
   }

  return (
    <div>
      {count}
  <div>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(resetAmount(addvalue))}>Add by ammount</button>
    <input
    type='text'
    value={inValue}
    onChange={(e) => setvalue(e.target.value)}/>

    <button onClick={resetAll}> reset</button>

    
  </div>
    </div>
  )
}

export default Mycount
