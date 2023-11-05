import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function Github(){
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('https://api.github.com/users/EarthisHeaven')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

    return (
        <div className='bg-gray-600 text-white text-3xl p-5 m-5'>
        <div>Github followes: {data.followers}</div>
        <Link className="flex items-center justify-center mt-11 mb-11">
                        <img
                            src={data.avatar_url}
                            alt="profile"
                            className= 'rounded-full w-64'
                        />
                    </Link>
        </div>
    )
}

export default Github