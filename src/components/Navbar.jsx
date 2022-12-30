import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext) //calling current user

  return (
    <div className='navbar'>
      <span className="logo">Mr.Chat</span>
      <div className="user">
        {/* current users profile and name */}
        <img src={currentUser.photoURL} alt="" /> 
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
