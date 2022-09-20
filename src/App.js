import Header from "./components/Header";
import Tasklist from './components/Tasklist';
import {useState} from 'react';
import './App.css'


function App() {
  const [tasks, setTask] = useState([{
    id: 1,
    task: 'hitting gym',
    date: '15-09-2022'
},
{
    id: 2,
    task: 'learn new skill',
    date: '16-09-2022'
},
{
    id: 3,
    task: 'Book match tickets',
    date: '17-09-2022'
}])

const addTask = (text)=>{
  let id = Math.floor((Math.random() * 1000) + 1);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;
  setTask([...tasks,{id,task: text, date: today}])
  console.log('added', tasks);
}



const deleteT = (id) => {
  setTask(tasks.filter(t => t.id !== id
))
}
 
  return (
    <>
      <Header onAdd={addTask}></Header>
      <Tasklist t={tasks}  onDelete={deleteT}></Tasklist>
    </>
  );
}

export default App;
