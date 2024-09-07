/* eslint-disable react/prop-types */
import { useState, useRef } from "react"



const TaskInput = ({ addTask }) => {
  const [InputValue, setInputValue] = useState("");

  const inputRef = useRef(null);


  const AddNewTask = (e) => {
    const emptyValue = InputValue.trim();
    e.preventDefault();
    if (emptyValue) {
      addTask(InputValue);
      setInputValue("");
      inputRef.current.focus();
    }
  }
  const emptyValue = InputValue.trim() === "";
  return (
    <div className="flex items-center justify-center m-3 max-w-screen-md drop-shadow-md w-full">
      <input
        type="text"
        placeholder="Enter your Daily Tasks"
        ref={inputRef}
        value={InputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        className="outline-none  bg-purple-600 rounded-md p-1 text-white"
      />
      <button
        className="bg-blue-500 text-white cursor-pointer w-26 px-2 py-1 rounded-lg"
        onClick={AddNewTask}
        disabled={emptyValue}
      >
        Add Task
      </button>
    </div>
  )
}
export default TaskInput