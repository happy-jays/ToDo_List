import React from 'react'
import { useState } from 'react'
import Todolist from './Todolist';
import "../App.css";
function Todoform() {
    const[input,setInput]=useState('');
    const[task,setTask]=useState([]);
    const[index,setIndex]=useState(null);
    const handleChange=(e)=>{
        e.preventDefault();
        setInput(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTask([...task,input]);
        setInput('');
    }
    const handleEdit=(e)=>{
        e.preventDefault();
        const updatedtask=[...task];
        updatedtask[index]=input;
        setTask(updatedtask);
        setInput('');
        setIndex(null);
    }
  return (
    <div className='main'>
    <h1>TO DO LIST</h1>
    <form>
        <input type="text" value={input} onChange={handleChange}></input>
        {
            index!==null ?(<button onClick={handleEdit}>Update TASK</button>):(<button onClick={handleSubmit}> ADD TASK </button>)
        }
        
    </form>
    <Todolist task={task} index={index} setIndex={setIndex} setTask={setTask} setInput={setInput} />
    </div>
  )
}

export default Todoform