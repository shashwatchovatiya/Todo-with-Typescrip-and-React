import React, { useState ,useRef ,useEffect } from 'react'
import { Todo } from '../Model'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
// import TodoList from './TodoList';


interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }: Props) => {
   
    const [edit, setEdit] = useState<boolean>()
    const[editTodo,setEditTodo] = useState<string>(todo.todo)

   const handelDone =(id:number)=>{
        setTodos(todos.map((todo)=>(
            todo.id === id?{...todo,isComplate:!todo.isComplate }:todo
        )))
   }

   const handelDelete =(id:number) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
   }

   const handelEdit= (e:React.FormEvent,id:number)=>{
        e.preventDefault();

        setTodos(todos.map((todo)=>(
            todo.id === id ?{...todo,todo:editTodo}:todo
        )))
        setEdit(false)
   }

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
     inputRef.current?.focus();
   }, [edit])
   

    return (
        <>
            <form 
            action="" 
            className='flex gap-3 justify-between items-center bg-slate-200 text-black px-4 mt-5 rounded-2xl text-xl
            max-w-fit overflow-auto
            '
            onSubmit={(e)=>handelEdit(e,todo.id)}>
                {
                    edit?(
                        <input 
                        type="text"
                         ref={inputRef}
                        value={editTodo}
                        onChange={(e)=>setEditTodo(e.target.value)}
                        className='rounded-3xl bg-slate-200 w-[100px]
                            hover:border-none px-3 outline-none'/>
                    ):(
                        todo.isComplate ?(
                            <s> {todo.todo} </s>
                        ):(
                            <span> {todo.todo} </span>
                        )
                    )
                }
                {/* {


                } */}

                <div className="flex gap-4 justify-center  items-center">
                    <span className='text-[#174149]' onClick={()=>{
                        if(!edit && ! todo.isComplate){
                            setEdit(!edit)
                        }
                    }}>
                        <CiEdit />
                    </span>
                    <span className='text-[#174149]' onClick={()=>handelDelete(todo.id)}>
                        <MdDelete />
                    </span>
                    <span className='text-[#174149]' onClick={()=>handelDone(todo.id)}>
                        <MdOutlineDone />
                    </span>
                </div>
            </form>
        </>
    )
}

export default SingleTodo