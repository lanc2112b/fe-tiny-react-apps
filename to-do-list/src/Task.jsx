const Task = ({ task, index, taskList, setTaskList }) => {
  //setTaskList,

  const onClickHandler = () => {
    const newArr = taskList.filter((e) => {
      return e !== task;
    });
    setTaskList(newArr);

  };
  return (
    <section key={index} className="task">
      <img src="logo192.png" alt="" className="task-spinner" />
      <p>{task}</p>
      <button
        className="remove-btn"
        value={index}
        onClick={onClickHandler}
      ></button>
    </section>
  );
};

export default Task;