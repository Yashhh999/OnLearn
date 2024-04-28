'use client'

import VideoBar from "@/components/VideoBar"
import { useState } from "react"
export default function Page() {
    let num;
    let title;
    let description;

    return(
        <>
        <div className="w-full">
        <VideoBar propsValue={{num:"1.", title:"Introduction to HTML"}}/>
        <VideoBar propsValue={{num:"2.", title:"HTML Basics"}}/>
        <VideoBar propsValue={{num:"3.", title:"HTML Elements"}}/>
        </div>
        </>
 )
}