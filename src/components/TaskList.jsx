/* eslint-disable react/prop-types */



const TaskList=({ tasks, handleDelete }) =>{
  return (
    <div>
      {tasks.map((task, index) => (
        <ul key={index} className="flex justify-between gap-2 mx-auto  max-w-screen-md px-2">
          <li className="bg-purple-500 flex w-full px-2 max-w-50 rounded-lg text-white py-3 mb-3">{task}</li>
          <button
            className="bg-blue-600 px-2 py-2 text-white rounded-md font-bold mb-3"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
