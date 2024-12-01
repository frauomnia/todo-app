import React, { useEffect, useRef, useState } from 'react';
import { RiTodoLine } from "react-icons/ri";
import TodoItems from './TodoItems';

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();

  const add = ()=> {
    const inputText = inputRef.current.value.trim();

    if(inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id)=> {
    setTodoList((prvTodos)=>{
      return prvTodos.filter((todo)=> todo.id !== id)
    })
  }

  const toggle = (id)=> {
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=> {
        if (todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList)
  )},[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
    {/* --------- title ---------- */}

      <div className='flex items-center mt-7 gap-2'>
        <RiTodoLine size={21} color='#134e4a' />
        <h1 className='text-3xl font-semibold text-teal-900'>To-Do list</h1>
      </div>

    {/* --------- input box ---------- */}

      <div className='flex items-center my-7 bg-orange-500 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-teal-900' type='text' placeholder='Add your task'/>
        <button onClick={add} className='border-none rounded-full bg-teal-900 w-20 h-14 text-white text-lg font-medium cursor-pointer'>+</button>
      </div>

    {/* --------- todo list ---------- */}

      <div>
        {todoList.map((item, index)=> {
          return <TodoItems 
          key={index} 
          text={item.text} 
          id={item.id} 
          isComplete={item.isComplete}
          deleteTodo={deleteTodo} 
          toggle={toggle} />
        })}
      </div>

    </div>
  )
}

export default Todo
