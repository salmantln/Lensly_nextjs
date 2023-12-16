"use client";

import React from 'react';
import {ReactLenis} from "@studio-freight/react-lenis";

function SmoothScrolling({children}) {
    // useEffect(() => {
    //     // Instantiate Lenis with specific configurations
    //     // and manage its lifecycle in line with React's lifecycle
    //     // This part depends on the capabilities of ReactLenis
    // }, []);

    return (
        <ReactLenis root options={{
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            // Add other custom configurations here if possible
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
