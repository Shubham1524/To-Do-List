import React from 'react'

export default function Done({ id, task, onChange }) {

    return (
        <div className='flex gap-2'>
            <input checked type="checkbox" id={id} onChange={onChange} />
            <label htmlFor={id}>{task}</label>
        </div>
    )
}
