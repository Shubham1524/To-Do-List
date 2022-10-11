import React from 'react'

export default function Done({ id, task, onChange, doneList, setDoneList }) {

    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <input checked type="checkbox" id={id} onChange={onChange} />
                <label htmlFor={id}>{task}</label>
            </div>
            <div>
                <button className='font-medium text-xs text-red-500 hover:underline' onClick={() => {
                    const newDoneList = []
                    for (let i = 0; i < doneList.length; i++) {
                        if (id !== doneList[i].id) {
                            newDoneList.push(doneList[i])
                        }
                        setDoneList(newDoneList)
                    }
                }
                }>Remove</button>
            </div>
        </div>
    )
}
