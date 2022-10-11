import React from 'react'
import Done from './Done'

export default function DoneList({ doneList, setTasks, tasks, setDoneList }) {

  const markAsUnreed = (task) => {
    const newDoneList = []

    for (let i = 0; i < doneList.length; i++) {
      const type = (+task.target.id === doneList[i].id)
      if (type) {
        setTasks([...tasks, doneList[i]])
      }
      if (!type) {
        newDoneList.push(doneList[i])
      }
    }
    setDoneList(newDoneList)
  }

  const removeTask = (event) => {
    console.log(event.target.taskid)
    for (let i = 0; i < doneList.length; i++) {
      const type = (+event.target.taskid === doneList[i].id)
      console.log(type)
    }
  }

  return (
    <>
      <h4 className='font-medium text-xl'>Things done</h4>
      <div className='flex flex-col gap-1'>
        {
          doneList.map(
            (task) => <Done id={task.id} task={task.task} onChange={markAsUnreed} onClick={removeTask} doneList={doneList} setDoneList={setDoneList} />
          )
        }
      </div>
    </>
  )

}
