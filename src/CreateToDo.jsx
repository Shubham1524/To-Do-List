import React, { useState } from 'react'

export default function CreateToDo({hide, create}) {

    const [value, setValue] = useState("")
    console.log(value)

    function handleValueChange(event) {
        setValue(event.target.value)
    }

    return (
        <div className='flex flex-col gap-5 shadow-md rounded-xl p-5'>
            <h3 className='font-medium text-lg'>Create a To Do</h3>
            <input type="text" className='py-2 px-2 border-2 rounded-lg max-w-xs focus:border-yellow-400' placeholder='Write a task' onChange={handleValueChange} value={value} />
            <div className='font-medium flex gap-5'>
                <button className='py-1 px-5 bg-yellow-400 rounded-lg border-yellow-400 border-2 text-white w-24 active:bg-yellow-500 active:border-yellow-500' onClick={create}>Save</button>
                <button className='py-1 px-5 rounded-lg bg-gray-400 text-white border-2 border-gray-400 active:bg-gray-500 active:border-gray-500 w-24' onClick={hide}>Cancel</button>
            </div>
        </div>
    )
}