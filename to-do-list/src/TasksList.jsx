import Task from "./Task";


const TasksList =({taskList, setTaskList})=>{
    let count = 0;
    return (
      <section className="tasks">
        {taskList.map((e) => {
            return (
              <Task
                task={e}
                index={count++}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            );
           
        })}
      </section>
    );
}

export default TasksList;