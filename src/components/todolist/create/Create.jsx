import { useStateValue } from '@/context';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    fullname: "",
    profession: "",
}
const Create = () => {
   const [user, setUser] = useState(initialState)
   const { setUserData } = useStateValue()

   
   const handleSubmit = (e)=>{
       e.preventDefault()
       setUserData(prev => [...prev, {...user, id: uuidv4()}])
       setUser(initialState)
    }
   
   const handleDelete = (e)=>{
       e.preventDefault()
              setUserData(prev => [...prev, {...user, id: uuidv4()}])

       setUser(initialState)
    }


  return (
    <div>
        <p>Create</p>
        <form onSubmit={handleSubmit} action="">
            <input required value={user.fullname} onChange={event => setUser({...user, fullname: event.target.value})} className='border' type="text" />
            <input required value={user.profession} onChange={event => setUser({...user, profession: event.target.value})} className='border' type="text" />
            <button type='submit'>Create</button>
        </form>
        <p>Delete</p>
        <form onSubmit={handleDelete} action="">
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default Create