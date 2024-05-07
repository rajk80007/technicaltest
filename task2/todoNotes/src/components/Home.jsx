import React, { useState } from 'react'

const Home = () => {

    const [note, setNote] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosClient.post('http://127.0.0.1:8000/api/create',{
            title:note
        })
        console.log(note)
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Take a note..."
            onChange={(e)=>setNote(e.target.value)}
            className='border-2 border-slate-300 px-4 py-2 my-5 w-[350px] rounded-lg' />
        </form>
    </div>
  )
}

export default Home