import '../assets/ToDoListFormStyle.css';
import React, {useState} from 'react';
import Calculator from './Calculator';


const ToDoListForm = (props)=>{
    const [inputText, setInputText] = useState('');


    const handelChange = (e)=>{
        setInputText(e.target.value);
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault();
       if(inputText === ''){
           alert('you have not add any task ');
           setInputText('');
       }
       else{
        props.getTask(inputText);
        setInputText('');
        
       }
    }

  
    return(
        <div className="text-center form ">
          
            <h1 className="h1 pt-1 ">To Do List</h1>
            <form onSubmit={handleSubmit}>
                
                <input
                type="text"
                placeholder="add task"
                className="form-control input-task"
                value={inputText}
                onChange={handelChange}
                />
                <button className='btn btn-outline-dark'>Add</button>
            

            </form>
           
        
            <div className="accordion mt-2" id="accordionExample">
                    <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button text-center" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                    Calculator
                                </button>
                                </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"    
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <Calculator/> 
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}


export default ToDoListForm;