import React, { useEffect, useState } from 'react'

//hooks should be inside the components function


const Github = () => {
    
const [data,setData] = useState([])
useEffect(()=>{
    //fetch the github followers from api
    fetch("https://api.github.com/users/rajdev12")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setData(data)
        
    })

},[])
  return (
    <>
    <h1 className='text-center text-3xl text-white p-4 bg-gray-600'>Github Followers : {data.followers}</h1>
    </>
  )
}

export default Github;