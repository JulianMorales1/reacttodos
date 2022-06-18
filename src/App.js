import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState("Title:");
  const [description, setDescription] = useState("Description:");
  const [importance, setImportance] = useState("Importance:");
  const [tasks, setTasks] = useState([]);

return (
  <div>
      ToDoComponent
      <div>
      <br></br>
      {title}
      <br></br>
      {description}
      <br></br>
      {importance}
      <br></br>
      </div>

      <input type="text" value={title} onChange={(event)=>{
            const newTitle = event.target.value
            setTitle(newTitle)
        }}></input>

      <br></br>

      <input type="text" value={description} onChange={(event)=>{
            const newDescription = event.target.value
            setDescription(newDescription)
        }}></input>

      <br></br>

      <select onChange={(e)=>{
        setImportance(e.target.value)
      }}>

      <option>Low</option>

      <option>Medium</option>

      <option>High</option>

      </select> 
      <br></br>
      <button 
      onClick={()=>{
        
        const newTask = {
            title: title,
            description: description,
            importance: importance,
        }
        const updatedTasks = [...tasks];
        updatedTasks.push(newTask)
        setTasks(updatedTasks)
      }}
      value="submit">Submit</button>

      <div>
      {tasks.map((task)=>{
        return (
          <div>
            {task.title}
            {" "}
            {task.description}
            {" "}
            {task.importance}
          </div>
        )
      })}
      
      </div>
      

    </div>
  
)

}

export default App;
