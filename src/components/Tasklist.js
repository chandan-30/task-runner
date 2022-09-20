import '../css/task.css';

const Tasklist = ({t, onDelete })=>{
    console.log(t)
    return(
        <div className="Tdiv">
            {t.map(task=>
                <p key={task.id}>{task.task}<br></br>
                <i>{task.date}</i>
                    <span onClick={() => {onDelete(task.id)}}>X</span>
                </p>
            )}
            
        </div>
    );
}

export default Tasklist;