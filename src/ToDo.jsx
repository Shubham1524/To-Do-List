import React from 'react'

export default function ToDo({ id, task, onChange }) {

    return (
        <div className='flex gap-2'>
            <input type="checkbox" id={id} onChange={onChange} />
            <label htmlFor={id}>{task}</label>
        </div>
    )
}