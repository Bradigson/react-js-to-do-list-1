import '../assets/ToDoListStorageStyle.css';
import React, {useState} from 'react';
const DeleteTask = (props) =>{
    const [state, setState] = useState(false);
    const handleDelete = ()=>{
        props.delete(props.id);
    }
    const handleCheck = ()=>{
        setState(!state)
    }
    return(
        <div className="task-container mt-2">
            <ul className='all-task'>
                <span><input type="checkbox" checked={state} onChange={handleCheck} className='form-check-input' />
                </span>
                <span className={`${state ? 'change' : ''}`}>value={props.getTaskToDelete}</span>
                <span><button className='btn btn-danger' onClick={handleDelete}>X</button></span>
            </ul>
        </div>
    )
}
export default DeleteTask;