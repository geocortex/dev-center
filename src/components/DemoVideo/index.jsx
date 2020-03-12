import React from "react";

export default function DemoVideo({ src }){
    return <video loop muted controls preload="none">
        <source src={src} type="video/webm"/>
        Your browser does not support the video tag.
    </video>
}