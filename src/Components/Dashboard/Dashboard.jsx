import React, { useState } from 'react'
import Books from '../Books/Books'
import Users from '../Users/Users'

const Dashboard = () => {
  
    const [selectedUser,setSelectedUser]=useState("")


  return (
    <div>
        <Users setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
        {
            selectedUser && (<Books userId={selectedUser}/>)
        }
        
    </div>
  )
}

export default Dashboard
