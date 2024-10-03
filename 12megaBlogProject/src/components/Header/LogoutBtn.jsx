import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth' 
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler= () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className="inline-block py-2 duration-200 rounded hover:bg-blue-100-full" onClick={logoutHandler}>
      LogoutBtn
    </button>
  )
}

export default LogoutBtn
