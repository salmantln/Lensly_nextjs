import React, {useEffect, useState} from 'react';
import Image from "next/image";

const TimeVisitor = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Europe/Amsterdam'
        });
    };

    // const formatTime = (date) => {
    //     return date.toLocaleTimeString('en-US', {
    //         hour: 'numeric',
    //         minute: 'numeric',
    //         hour12: true,
    //         timeZone: 'America/New_York'
    //     });
    // };

    return (
        <div className="div-block-33">
            <div className="time_visitor">
                <div className="clock_circle">
                    <div className="div-block-31">
                        <Image
                            src="https://assets-global.website-files.com/6398aa01513091536e5f3c96/639b0cf216d4d91a3b140bb9_clock.png"
                            loading="lazy"
                            width={50}
                            height={50}
                            alt="time icon"
                            className="clock_icon"/>
                    </div>
                </div>
                <div className="location-row">
                    <div className="text-block-23">Hello Visitor`&lsquo;`</div>
                    <div className="time-content-wrapper">
                        <div className="time-wrapper">
                            <div className="time-message">It`&apos;`s Early</div>
                            <div className="text-block-23 _02">it`&apos;`s</div>
                            <div className="city-time">
                                {formatTime(currentTime)}
                            </div>
                            {/*<div className="text-block-23 _02">in NY</div>*/}
                            <div className="text-block-23 _02">in AMS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeVisitor;