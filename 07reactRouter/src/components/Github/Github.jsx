import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData();
    /*
    const [data,setdata]= useState([])
    useEffect(()=>{
        fetch('https://rupayan20.github.io/rupayandutta/info.json')
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            setdata(data);
        })
    }, [])
    */
   
  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-500'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="profile-picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://rupayan20.github.io/rupayandutta/info.json')
    return response.json()
}