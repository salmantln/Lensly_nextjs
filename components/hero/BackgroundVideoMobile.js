import React from 'react';

const BackgroundVideoMobile = () => {
    return (
        <div className="background_video_mobile">
            <div
                data-poster-url="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639985be71dd209cc715f4e5_Mobile Video-poster-00001.jpg"
                data-video-urls="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639985be71dd209cc715f4e5_Mobile Video-transcode.mp4,https://assets-global.website-files.com/6398aa01513091536e5f3c96/639985be71dd209cc715f4e5_Mobile Video-transcode.webm"
                data-autoplay="true" data-loop="true" data-wf-ignore="true"
                className="background-video-2 w-background-video w-background-video-atom">
                <video
                    id="53b055d6-71fd-0d7c-696f-56e9b4a06104-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                    style={{backgroundImage: `url(https://assets-global.website-files.com/6398aa01513091536e5f3c96/639985be71dd209cc715f4e5_Mobile Video-poster-00001.jpg)`}}>
                    <source
                        src="/video/background_video.mp4"
                        // src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639985be71dd209cc715f4e5_Mobile Video-transcode.mp4"
                        type="video/mp4"/>
                    <source
                        src="/video/background_video.mp4"
                        // src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639985be71dd209cc715f4e5_Mobile Video-transcode.webm"
                        type="video/webm"/>
                </video>
            </div>
        </div>
    );
};

export default BackgroundVideoMobile;
