import React, { useState } from 'react'
import CreateToDo from './CreateToDo'

export default function ToDoList({ create }) {

    const [isAddTaskOpen, setAddTaskOpen] = useState(false)
    const [addToDoBtn, setToDoBtn] = useState(true)

    const handleCreateList = () => {
        setAddTaskOpen(true)
        setToDoBtn(false)
    }
    const hideCreateList = () => {
        setAddTaskOpen(false)
        setToDoBtn(true)
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
                        {<div className='flex flex-col gap-1'>
                            <div className='flex gap-2'>
                                <input type="checkbox" name="" id="hello" />
                                <label htmlFor="hello">hello</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" name="" id="hello" />
                                <label htmlFor="hello">hello</label>
                            </div>
                        </div>}
                    </div>
                    {addToDoBtn && <button className='py-1 text-white bg-yellow-500 rounded-full px-3 font-medium w-32' onClick={handleCreateList}>+ Add a todo</button>}
                </div>
            </div>
            {isAddTaskOpen && <CreateToDo hide={hideCreateList} create={create} />}
        </>
    )
}