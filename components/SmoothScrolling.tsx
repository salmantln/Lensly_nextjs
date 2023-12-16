// "use client";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import React from "react";
//
// function SmoothScrolling({ children }) {
//     return (
//         <ReactLenis root options={{ lerp: 0.1, duration: 0.5, smoothTouch: true }}>
//             {children}
//         </ReactLenis>
//     );
// }
//
// export default SmoothScrolling;
"use client";
import React, { useEffect } from 'react';
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
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
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            // Add other custom configurations here if possible
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
