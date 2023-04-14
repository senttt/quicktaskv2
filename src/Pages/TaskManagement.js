import React, { useState } from "react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState({
    user: "",
    task: "",
    time: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask({
      user: "",
      task: "",
      time: "",
    });
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };

  const handleSaveTask = () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[editingIndex] = newTask;
      return newTasks;
    });
    setNewTask({
      user: "",
      task: "",
      time: "",
    });
    setEditingIndex(null);
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  return (
    <div style={{ padding: "20%" }}>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Task</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.user}</td>
              <td>{task.task}</td>
              <td>{task.time}</td>
              <td>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input
          type="text"
          name="user"
          placeholder="User"
          value={newTask.user}
          onChange={handleInputChange}
          style={{ color: "black" }}
        />
        <input
          type="text"
          name="task"
          placeholder="Task"
          value={newTask.task}
          onChange={handleInputChange}
          style={{ color: "black" }}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={newTask.time}
          onChange={handleInputChange}
          style={{ color: "black" }}
        />
        {editingIndex !== null ? (
          <button onClick={handleSaveTask}>Save</button>
        ) : (
          <button onClick={handleAddTask}>Add</button>
        )}
      </div>
    </div>
  );
};

export default TaskManagement;
