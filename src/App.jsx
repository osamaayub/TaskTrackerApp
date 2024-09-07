import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList";


const App = () => {
  const[tasks,setTasks]=useState([]);
  

  //add functionality
  const addTask=(tasks)=>{
    setTasks(prevTasks => [...prevTasks, tasks]);
  }
  // delete Task functionality
 
    
    const handleDelete = (id) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
  return (
    <div className="flex flex-col  text-purple-500 mt-2 items-center justify-center">
     <h1 className="text-4xl fs-2 text-center">Task Tracker App</h1>
      <TaskInput addTask={addTask}/>
      <TaskList tasks={tasks}  handleDelete={handleDelete}/>
    </div>
  )
}
export default App