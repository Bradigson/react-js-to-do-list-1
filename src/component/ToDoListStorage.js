import React, {useState} from 'react';
import ToDoListForm from './ToDoListForm';
import DeleteTask from './DeleteTask';
import '../assets/ToDoListStorageStyle.css';

const ToDoListStorage = ()=>{
    const [taskStored, setTaskStored] = useState([]);

    const allTaskStored = (task)=>{
        setTaskStored([task, ...taskStored]);
        console.log(taskStored)
    }
    const Delete = (id)=>{
        const getTaskToFilter = taskStored.filter((e, index)=> index !== id);
        setTaskStored(getTaskToFilter);
    }
    return(
        <div>
            <ToDoListForm getTask={allTaskStored}/>
            <div className='task pt-3'>
                {
                    taskStored.map((tasks, index)=>{
                        return(
                            <DeleteTask key={tasks.toString() }
                            getTaskToDelete={tasks} delete={Delete} id={index}/>
                        )
                    })
                }
            </div>
            
        </div>

    )
}
export default ToDoListStorage;