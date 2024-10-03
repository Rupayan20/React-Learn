import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication= true}) {
    const navigate= useNavigate()
    const [loader, setLoader] = useState(false)
    const authStatus= useSelector(state=> state.auth)

    useEffect(() => {
        // Easier Way
        /*
        if(authStatus === true){
            navigate("/")
        } else if (authStatus === false){
            navigate("/login")
        }
        */

        // let authValue = authStatus === true ? true : false

        true && setLoader(true)
        if(authStatus && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
    }, [authStatus, navigate, authentication])

  return (
    <div>
      AuthLayout
    </div>
  )
}

