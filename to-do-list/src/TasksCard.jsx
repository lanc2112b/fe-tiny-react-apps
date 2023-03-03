import TasksForm from "./TasksForm";
import TasksList from "./TasksList";
import {useState} from "react";

const TasksCard = () =>{
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    //console.log(taskList)
    //pass the state of tasks form updates task list
    return (
      <section className="tasks-card">
        <TasksForm
          task={task}
          setTask={setTask}
          setTaskList={setTaskList}
          taskList={taskList}
        />
        <TasksList taskList={taskList} setTaskList={setTaskList} />
      </section>
    );
}

export default TasksCard;
