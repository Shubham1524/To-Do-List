import React from 'react'
import CreateToDo from './CreateToDo'
import ToDo from './ToDo'

export default function ToDoList({ setTasks, setDoneList, doneList, createNewTask, inputValue, isAddTaskOpen, addToDoBtn, setAddTaskOpen, setToDoBtn, tasks }) {

    const handleCreateList = () => {
        setAddTaskOpen(true)
        setToDoBtn(false)
    }

    const hideCreateList = () => {
        setAddTaskOpen(false)
        setToDoBtn(true)
    }

    const markAsDone = (task) => {
        const newTaskList = []
        for (let i = 0; i < tasks.length; i++) {
            const type = (+task.target.id === tasks[i].id)
            if (type) {
                setDoneList([...doneList, tasks[i]])
            }
            if (!type) {
                newTaskList.push(tasks[i])
            }
        }
        setTasks(newTaskList)
    }

    return (
        <>
            <div className='flex flex-col gap-10'>
                <h1 className='text-3xl font-bold'>Things to get done</h1>
                <div className='flex flex-col gap-2'>
                    <div>
                        <div className='font-medium text-lg'>
                            <h4>Things to do</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            {
                                tasks.map((task) => <ToDo id={task.id} task={task.task} onChange={markAsDone} />)
                            }
                        </div>
                    </div>
                    {addToDoBtn && <button className='py-1 text-white bg-yellow-500 rounded-full px-3 font-medium w-32' onClick={handleCreateList}>+ Add a todo</button>}
                </div>
            </div>
            {isAddTaskOpen && <CreateToDo hide={hideCreateList} create={createNewTask} task={inputValue} />}
        </>
    )
}