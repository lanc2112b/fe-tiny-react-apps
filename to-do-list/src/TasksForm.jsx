const TasksForm = ({ task, setTask, setTaskList, taskList }) => {
  //console.log(task);
    let showError = null;

    const errorMessage = () => {
        showError = true; // This will need updating on a state, so the html is rerendered
        alert("task exists");
    };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (task.length === 0) return;
    
    if (taskList.includes(task)) {
        errorMessage();
        return;
    }

    setTaskList((taskList) => [...taskList, task]);
    setTask("");
  };

  return (
    <section className="form-section">
      <div className={showError ? 'message' : 'no-message'}>Task exists</div>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="taskInput">
          Task: <span className="tiny-text">(*required)</span>
        </label>
        <input
          type="text"
          id="taskInput"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Add a task..."
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default TasksForm;
