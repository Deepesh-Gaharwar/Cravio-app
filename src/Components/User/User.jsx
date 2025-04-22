import React, { useState } from 'react'

const User = () => {

   const [count,] = useState(0);

  return (
    <div className='user-card p-[10px] border'>
        <h1>Count : {count}</h1>
        <h2>Name : Deepesh Gaharwar</h2>
        <h3>Location : New Delhi</h3>
        <h4>Contact : deepeshgaharwar3@gmail.com</h4>
      
    </div>
  )
}

export default User
