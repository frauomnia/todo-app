import React from 'react';
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
import { TiDelete } from "react-icons/ti";


const TodoItems = ({text, id, isComplete, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <ImCheckboxChecked size={17}/>
        <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        {/* <ImCheckboxUnchecked /> */}
      </div>
      <TiDelete size={20} className='cursor-pointer' onClick={()=>{deleteTodo(id)}} />

    </div>
  )
}

export default TodoItems
