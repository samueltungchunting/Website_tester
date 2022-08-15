import React, { useState } from 'react'
import './Loader.css'

const Loader = () => {

    const [webLoading, setWebLoading] = useState(true)

    return (
        <div>
        {/* <div className='loader' id='loader' style={{display: webLoading? "none": "block"}} /> */}
        {window.addEventListener("load", () => {
            setWebLoading(false)
        })}
        </div>
    )
}

export default Loader