import React from 'react'
import { Overlay, VideoContainer } from './Video.element'

function Video() {
    return (
        <>
            {/* <VideoContainer> */}
                <video
                    loop
                    muted
                    autoPlay
                    >
                    <source src={"config/images/bg.mp4"} type="video/mp4" />
                </video>
            {/* </VideoContainer> */}

        </>
    )
}

export default Video