import React, { useContext, useState } from "react"
import DoneList from "./DoneList"
import Navbar from "./Navbar"
import ToDoList from "./ToDoList"

function App() {
  const dummy = [
    {
      "id": 1,
      "task": "Do your homework"
    },
    {
      "id": 2,
      "task": "task 2"
    }
  ]
  const dummyDone = [
    {
      "id": 6,
      "task": "doneTask 1"
    },
    {
      "id": 7,
      "task": "donTaske 2"
    }
  ]

  const currentTask = JSON.parse(localStorage.getItem("current tasks"))
  const completeTask = JSON.parse(localStorage.getItem("complete tasks"))

  console.log(currentTask, completeTask)

  const [tasks, setTasks] = useState(currentTask) || (dummy)
  const [value, inputValue] = useState("")
  const [isAddTaskOpen, setAddTaskOpen] = useState(false)
  const [addToDoBtn, setToDoBtn] = useState(true)
  const [doneList, setDoneList] = useState(completeTask) || (dummyDone)

  localStorage.setItem("current tasks", JSON.stringify(tasks))
  localStorage.setItem("complete tasks", JSON.stringify(doneList))

  const timeStamp = Date.now()

  const createNewTask = () => {
    if (value.length != 0) {
      setAddTaskOpen(false)
      setToDoBtn(true)
      setTasks([...tasks, { "id": timeStamp, "task": value }])
    } else {
      return
    }
  }

  return (
    <>
      <Navbar />
      <div className="px-4 py-10 sm:px-7 lg:px-16 flex flex-col gap-5">
        <ToDoList setTasks={setTasks} createNewTask={createNewTask} inputValue={inputValue} isAddTaskOpen={isAddTaskOpen} addToDoBtn={addToDoBtn} setAddTaskOpen={setAddTaskOpen} setToDoBtn={setToDoBtn} tasks={tasks} doneList={doneList} setDoneList={setDoneList} />
        <DoneList setDoneList={setDoneList} setTasks={setTasks} tasks={tasks} doneList={doneList} />
      </div>
    </>
  )
}

export default App