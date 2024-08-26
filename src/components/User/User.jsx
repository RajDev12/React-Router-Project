import React from 'react'
import { useParams } from 'react-router-dom'



const User = () => {
    const { userid } = useParams()
    return (
        <>
            <h1 className='bg-gray-600 px-4 text-white text-3xl text-center'>User:{userid}</h1>
            <div className="mx-auto md:5/12 lg:w-5/12">
                <img
                    src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                    alt="image"
                />
            </div>
        </>
    )
}

export default User;