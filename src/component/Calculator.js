import React, {useState} from 'react';
import '../assets/Calculator.css';



const Calculator = (props)=>{
    const [add, setAdd] = useState('');
    const [pay, setPay] = useState(0);
    const handleAdd = (e)=>{
        setAdd(add.concat(e.target.name))
        // setShow(e.target.value)
    }
    
    const handleDelete = ()=>{
        setAdd(add.slice(0, add.length -1));
    }

    const handleClear = ()=>{
        setAdd('');
    }
    const handleCalcular = ()=>{
        try{
            setAdd(eval(add).toString());
           
            // console.log(add)
            
        }
        catch{
            setAdd('Error')
        }
    }
   
    const handleTotal = ()=>{
        setPay(pay + parseInt(add));
        setAdd('')
        
    }
    
    return(
        <div>
            <div className='container-total'>
                <span className="total">
                    <b>RD$:<span className="acumulado">{pay}</span>.00</b>
                </span>
            </div>
            <div className='screen mt-3'>
                <input type="text" value={add} />
            </div>
            <div className='mt-4'>
                <div className="row mt-4">
                    <div className="col">
                        <button className="btn sign" onClick={handleDelete}>AC</button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers" onClick={handleClear}>C</button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers" onClick={()=>{alert('Not working yet')}}>+/-
                        </button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers" name="%" onClick={handleAdd}>%</button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers" name="/" onClick={handleAdd}>÷</button>
                    </div>

                </div>


                <div className="row mt-4">
                    <div className="col">
                        <button className="btn sign" name="*" onClick={handleAdd}>x</button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers" name="-" onClick={handleAdd}>-</button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers"  name="+" onClick={handleAdd}>+</button>
                    </div>

                    <div className="col">
                        <button className="btn sign numbers" name="." onClick={handleAdd}>.</button>
                    </div>
                    
                    <div className="col">
                        <button className="btn number numbers" name="0" onClick={handleAdd}>0</button>
                    </div>

                </div>


                <div className="row mt-4">
                    <div className="col">
                        <button className="btn number"  name="7" onClick={handleAdd}>7</button>
                    </div>

                    <div className="col">
                        <button className="btn number numbers"  name="8" onClick={handleAdd}>8</button>
                    </div>

                    <div className="col">
                        <button className="btn number numbers" name="9" onClick={handleAdd}>9</button>
                    </div>

                    <div className="col">
                        <button className="btn number numbers" name="4" onClick={handleAdd}>4</button>
                    </div>
                    
                    <div className="col">
                        <button className="btn number numbers" name="5" onClick={handleAdd}>5</button>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col">
                        <button className="btn number" name="6" onClick={handleAdd}>6</button>
                    </div>

                    <div className="col">
                        <button className="btn number numbers" name="1" onClick={handleAdd}>1</button>
                    </div>

                    <div className="col">
                        <button className="btn number numbers" name="2" onClick={handleAdd}>2</button>
                    </div>

                    <div className="col">
                        <button className="btn number numbers" name="3" onClick={handleAdd}>3</button>
                    </div>
                    
                    <div className="col">
                        <button className="btn btn-primary equal numbers" onClick={handleCalcular}>=</button>
                    </div>

                </div>
                <div className="row mt-4">
                    <div>
                        <button className="btn btn-success" onClick={handleTotal}>Add to Total</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Calculator;
