import { useStateValue } from '@/context'
import React from 'react'

const View = () => {
  const { userData } = useStateValue()
  console.log(userData);
  
  return (
    <div className='mt-10'>
      {
        userData?.map((user)=> (
          <div key={user.id}>
            <h3>{user.fullname}</h3>
            <p>{user.profession}</p>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default View