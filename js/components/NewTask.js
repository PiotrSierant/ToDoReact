import React, {useState} from "react";
import { Button } from "./Button";
import {createTask} from "../api/tasks";

function NewTask({onNewTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = e => {
    e.preventDefault();
    const task = {
      title,
      description,
      status: "open"
    };
    createTask(task, onNewTask);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h1 className="card-title">Dodaj zadanie</h1>
        <form onSubmit={handleAddTask}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="title"
                   placeholder="Tytuł"
                   value={title}
                   onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="description"
                   placeholder="Opis"
                   value={description}
                   onChange={e => setDescription(e.target.value)}/>
          </div>
          <Button color={"info"} icon={"fas fa-plus-circle"}>Dodaj zadanie</Button>
        </form>
      </div>
    </div>
  );
}

export default NewTask;