import React, { useState, useEffect } from "react";
import "./TaskManagement.css";
import { getDatabase, ref, onValue, push, set } from "firebase/database";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState({
    user: "",
    task: "",
    time: "",
  });

  useEffect(() => {
    const db = getDatabase();
    const tasksRef = ref(db, "tasks");
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const taskArray = Object.keys(data).map((taskId) => ({
          id: taskId,
          ...data[taskId],
        }));
        setTasks(taskArray);
      }
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    const db = getDatabase();
    const taskRef = push(ref(db, "tasks"));
    set(taskRef, newTask);
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
    const db = getDatabase();
    const taskRef = ref(db, "tasks/" + newTask.id);
    set(taskRef, newTask);
    setNewTask({
      user: "",
      task: "",
      time: "",
    });
    setEditingIndex(null);
  };

  const handleDeleteTask = (index) => {
    const db = getDatabase();
    const taskRef = ref(db, "tasks/" + tasks[index].id);
    set(taskRef, null);
  };

  return (
    <div style={{ padding: "20%" }}>
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
      <br></br>
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
            <tr key={task.id}>
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
    </div>
  );
};

export default TaskManagement;
