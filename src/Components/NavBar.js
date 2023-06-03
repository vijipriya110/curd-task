import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {
    const userInfo = useSelector(state=>state.userInfo.data)
  return (
    <div className='nav-container'>
        <h3>{userInfo.name}</h3>
        <button>Logout</button>
    </div>
  )
}

export default NavBar
