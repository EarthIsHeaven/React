import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const { id } = useParams();
    return (
        <>
        <div className='bg-yellow-400 p-5 text-3xl m-4'>User: {id} </div>
        </>
    )
}

export default User