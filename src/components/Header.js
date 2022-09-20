import { useState } from 'react';
import '../css/header.css';
import Input from './Input';


const Header = ({onAdd}) => {
    let task_;
    const [vall, setVall] = useState('');
    const clickH = ()=>{
        if(!task_){
            alert('Please fill the task field');
            return;
        } 
        onAdd(task_);
        setVall('');
    }
    const changeT = (task) => {
        console.log('in',task)
        task_ = task;
    }
    
    
    return (
        <div className="headerP">
            <h3>Task Tracker</h3>
            <button onClick={clickH}>Add</button>
            <Input type="text" val={vall} onUpd={changeT}></Input>
        </div>
    );
}

export default Header;