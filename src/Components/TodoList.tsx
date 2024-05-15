// import { useEffect } from 'react'
import React  from 'react'
import { Todo } from '../Model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList:React.FC<Props> = ({todos,setTodos}:Props) =>{

    return (
    <div className='flex justify-evenly  flex-wrap list-none'>
        {
            todos.map((todo) =>(
                <SingleTodo 
                    todo ={todo}
                    setTodos= {setTodos}
                    todos ={todos}
                    key={todo.id}
                />
            ))
        }
    </div>
  )
}

export default TodoList
