import Task from "./Task";

const TasksList =({taskList})=>{
    console.log(taskList)
    return (
        <section>
            {
                taskList.map(e =>{
                    return <Task task={e}/>
                })
            }
        </section>
    )
}

export default TasksList;