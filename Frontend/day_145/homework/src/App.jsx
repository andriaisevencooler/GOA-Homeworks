import React, { useState } from 'react'

export default function App() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput])
      setTaskInput('')
    }
  }
  return (
    <div className='w-full h-screen flex flex-col p-[25px] bg-[url(./assets/grid.png)] gap-[15px] overflow-hidden'>
      <div className='bg-black sm:w-[300px] w-full h-[50px] rounded-[10px] flex p-[10px] gap-[10px]'>
        <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} className='bg-white rounded-[5px] pl-[5px]' placeholder='Add to-do list...' />
        <button onClick={handleAddTask} className='text-white cursor-pointer'>Add Task</button>
      </div>
      <div className='flex flex-col gap-[10px]'>
        {tasks.map((item, index) => (
          <div className='bg-black p-[10px] rounded-[5px] text-white' key={index}>{item}</div>
        ))}
      </div>
    </div>
  )
}
