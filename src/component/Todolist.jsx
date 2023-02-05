import React from 'react'
import "../App.css";

function Todolist({task, index, setIndex, setTask, setInput}) {
    const handleDelete=(index)=>{
        const updatedTask= [...task];
        updatedTask.splice(index,1);
        setTask(updatedTask);
    }
    const handleEdit=(index)=>{
        setInput(task[index]);
        setIndex(index);
    }
  return (
    <ol className='list'>
        {
            task.map((task,index)=>{
               return <li key={index}>
                {task}
                <button onClick={()=>handleEdit(index)}>Edit</button>
                <button onClick={()=>handleDelete(index)}>Delete</button>
               </li>
            })
        }
    </ol>
  )
}

export default Todolist