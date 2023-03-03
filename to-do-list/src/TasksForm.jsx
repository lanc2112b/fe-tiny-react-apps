import Task from "./Task";

const TasksForm =({task, setTask, setTaskList, taskList}) =>{
    console.log(task)
    const handlerSubmit = (event) =>{

        event.preventDefault();
        
        setTaskList(taskList=>[...taskList, task]);

    }
    return(
        <section>
            <form onSubmit={handlerSubmit}>
            <label htmlFor="taskInput"></label>
            <input type="text" id="taskInput" value={task} 
            onChange={(event)=>setTask(event.target.value)}>   
            </input>
            <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default TasksForm;