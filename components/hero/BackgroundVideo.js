import React from 'react';
// import background_video from "../../public/video/background_video.mp4";
// import './App.css';
const BackgroundVideo = () => {
    return (
        <div className="background_video_desktop">
            <div
                // data-poster-url="https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398b1144c7ac778b8459580_Studio Web Update-poster-00001.jpg"
                // data-video-urls="https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398b1144c7ac778b8459580_Studio Web Update-transcode.mp4,https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398b1144c7ac778b8459580_Studio Web Update-transcode.webm"
                data-autoplay="true" data-loop="true" data-wf-ignore="true"
                className="background-video w-background-video w-background-video-atom">
                <video
                    id="96df6578-5b8d-1a90-eb7e-616b153bfe56-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                    style={{backgroundImage: `url(https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398b1144c7ac778b8459580_Studio Web Update-poster-00001.jpg)`}}
                >
                    <source
                        src="/video/background_video.mp4"
                        // src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398b1144c7ac778b8459580_Studio Web Update-transcode.mp4"
                        type="video/mp4"/>
                    <source
                        src="/video/background_video.mp4"
                        // src={background_video}
                        // src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/6398b1144c7ac778b8459580_Studio Web Update-transcode.webm"
                        type="video/webm"/>
                </video>
            </div>
        </div>
    );
};

export default BackgroundVideo;
