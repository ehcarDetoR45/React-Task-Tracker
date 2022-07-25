import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
    console.log("deleteTask", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
