import React from 'react';
import { RiTodoLine } from "react-icons/ri";

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
    {/* --------- title ---------- */}

    <div className='flex items-center mt-7 gap-2'>
      <RiTodoLine size={21} />
      <h1 className='text-3xl font-semibold'>To-Do list</h1>
    </div>

    {/* --------- input box ---------- */}

    <div className='flex items-center my-7 bg-orange-500 rounded-full'>
      <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-teal-900' type='text' placeholder='Add your task'/>
      <button className='border-none rounded-full bg-teal-900 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
    </div>

    </div>
  )
}

export default Todo
