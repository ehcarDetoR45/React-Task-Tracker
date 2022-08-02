import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [note, setNote] = useState("");
  const [reminder, setReminder] = useState(false);
  // const [completed, setCompleted] = useState(false); create a ternary operator to check if the task is completed or not and if it is then set the completed to true and then change the color of the overlay of the task box to show capitalized text saying "Completed"!

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a task.");
      return;
    }

    onAdd({ text, day, note, reminder });

    setText("");
    setDay("");
    setNote("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Notes</label>
        <input
          type="text"
          placeholder="Add some notes"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
