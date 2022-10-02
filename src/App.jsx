import React, { useState } from "react"
import DoneList from "./DoneList"
import Navbar from "./Navbar"
import ToDoList from "./ToDoList"

function App() {
  const [list, setList] = useState({})

  function TaskList(keyValue) {
    const timeStamp = Date()
    setList({...list, [timeStamp]: keyValue})
  }
  
  function createNewTask() {
    console.log("createNewTask")
    TaskList()
  }

  return (
    <>
      <Navbar />
      <div className="px-4 py-10 sm:px-7 lg:px-16 flex flex-col gap-5">
        <ToDoList create={createNewTask} />
        <DoneList />
      </div>
    </>
  )
}

export default App
