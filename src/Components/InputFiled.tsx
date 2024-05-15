import { useRef } from "react";
import React from 'react'

interface Propes {
  todo :string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handelTodo : (e:React.FormEvent )=> void;
}

const  InputFiled:React.FC<Propes> = ({todo,setTodo,
handelTodo}:Propes) => {

  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
    <div>
        <form 
        action="" 
        method="get" 
        className='form' 
        onSubmit={(e) => {
          handelTodo(e)
          inputRef.current?.blur()
        }}
        
        >
            <div className="flex justify-center w-full mt-8 gap-2 text-black "> 
                <input 
                type="text" 
                ref={inputRef}
                placeholder='Enter your task' className='rounded-3xl	 hover:border-none px-3 outline-none'
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                />
                
                <button className='rounded-xl border-2 px-4 bg-[#24535C] text-white hover:bg-cyan-900'>Go</button>
            </div>
        </form>
    </div>
  )
}

export default InputFiled;