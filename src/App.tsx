import React, { useState,useEffect } from 'react'

import './App.css'
import InputFiled from './Components/InputFiled'
import { Todo } from './Model';
import TodoList from './Components/TodoList';

const App: React.FC = () =>{
  const [todo,setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handelTodo = (e:React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isComplate:false}]);
      setTodo("");
    }
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if(savedTodos && savedTodos.length > 0 ){
      setTodos(savedTodos);
    }

  }, []);

// Update local storage whenever todos change
  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  // console.log(todos);
  
  return (
    <div className=''>
      <h1 className='text-4xl text-center mt-6 z-10'>
          Taskify
      </h1>
      <InputFiled todo={todo} setTodo={setTodo} handelTodo={handelTodo} />

      {/* <TodoList> */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
