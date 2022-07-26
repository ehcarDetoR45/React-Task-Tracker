import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Pick up dresser at ikea",
      day: "Monday",
      reminder: true,
      completed: false,
    },
    {
      id: 2,
      text: "Task 2",
      day: "Paint the office",
      reminder: true,
      completed: false,
    },
    {
      id: 3,
      text: "Clean the shop",
      day: "Wednesday",
      reminder: true,
      completed: false,
    },
  ]);

  //DELETING A TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "You currently have no tasks"
      )}
    </div>
  );
};

export default App;
