import React from "react";

// TODO: Define rules for presenting videos:
// - Specified size?
// - No audio (will also shrink file size)
// - Specific format only (webm)?
// - Best tool to record and the recording parameters to use (quality, etc)
export default function DemoVideo({ src }) {
    return (
        <video autoPlay loop muted>
            <source src={src} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    );
}
