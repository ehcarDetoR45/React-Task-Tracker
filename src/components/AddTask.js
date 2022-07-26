import { useState } from "react";

const AddTask = () => {
 const [task, setTask] = useState("");
 const [day, setDay] = useState("");
 const [reminder, setReminder] = useState(false);
 // const [completed, setCompleted] = useState(false); create a ternary operator to check if the task is completed or not and if it is then set the completed to true and then change the color of the overlay of the task box to show capitalized text saying "Completed"!
 
  return (
    <from className="add-form">
     <div className="form-control">
      <label>Task</label>
      <input type="text"  placeholder="Add Task" />
     </div>
     <div className="form-control">
      <label>Day</label>
      <input type="text"  placeholder="Add Date & Time" />
     </div>
     <div className="form-control">
      <label>Notes</label>
      <input type="text"  placeholder="Add some notes" />
     </div>
     <div className="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox"  placeholder="Add Reminder" />
     </div>

     <input type="submit" value="Save Task" className="btn btn-block"/>
    </from>
  )
}

export default AddTask