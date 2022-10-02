import React from 'react'

export default function DoneList() {
  return (
    <div>
        <h4 className='font-medium text-lg'>Things done</h4>
        {<div className='flex flex-col gap-1'>
            <div className='flex gap-2'>
                <input checked type="checkbox" name="" id="done" />
                <label htmlFor="done">done</label>
            </div>
        </div>}
    </div>
  )
}
