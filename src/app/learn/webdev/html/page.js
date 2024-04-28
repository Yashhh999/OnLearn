'use client'

import VideoBar from "@/components/VideoBar"
import { useState } from "react"
export default function Page() {
    let num;
    let title;
    let description;
    let videoLink;

    return(
        <>
        <div className="w-full mr-10">
        <VideoBar propsValue={{num:"1.", title:"Introduction to HTML",videoLink:"https://cdn.pixabay.com/video/2018/01/31/14035-254146872_tiny.mp4"}}/>
        <VideoBar propsValue={{num:"2.", title:"HTML Basics"}}/>
        <VideoBar propsValue={{num:"3.", title:"HTML Elements"}}/>
        </div>
        </>
 )
}