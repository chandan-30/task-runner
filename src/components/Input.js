import '../css/input.css';
import { useEffect, useState } from 'react';

const Input = ({type, onUpd,val}) => {
    const [inpu, setInput] = useState(val);
    
    const catchInput = (e) => {
        setInput(e.target.value);
        
    }
    useEffect(()=>{
        onUpd(inpu)
        
    },[inpu]);
    return (
        <div className="inputP">
            <label>Task</label>
            <br></br>
            <input type={type} value={inpu}  onChange={catchInput} ></input>
        </div>
    );

}

export default Input;