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
           
        


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                        aria-expanded="false" aria-controls="collapseTwo">
                        Calculadora
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" 
                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Calculator/>   
                    </div>
                </div>
                
           </div>
        </div>
    )
}


export default ToDoListForm;