'use client'

import { useState } from "react"
export default function VideoBar({ propsValue }) {
    const [num, setNum] = useState(propsValue.num)
    const [title, setTitle] = useState(propsValue.title)
    const [description, setDescription] = useState('')
    const [videoLink, setVideoLink] = useState(propsValue.videoLink)
    const [value, setValue] = useState('')
    const [isRotated, setIsRotated] = useState(false)

    const click = (e) => {
        e.preventDefault()
        setIsRotated(!isRotated);
    }

    return (
        <>
            <div className="m-10 w-full mr-20">
                <div className="flex justify-between text-lg mr-20 rounded-md p-1 bg-violet-500" >
                    <div className="flex ml-5">
                        <h1>{num} </h1>
                        <h1 className="mx-6">{title} </h1>
                    </div>
                    <button onClick={click} >
                        <img src="https://cdn-icons-png.freepik.com/512/1/1960.png" className={`h-5 mr-8  ${isRotated ? 'transition: rotate-90 duration-300 rounded-full' : 'transition: rotate-0 duration-300 rounded-full'}`} ></img>
                    </button>
                </div>

                {isRotated ? <div className="h-96 mr-20 rounded  bg-gray-100">
                <div className="h-92 bg-gray-200 flex justify-center">
                    <video width="700" height="240" controls>
                        <source src={videoLink} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div> 
                </div> : ''}

            </div>


        </>
    )
}