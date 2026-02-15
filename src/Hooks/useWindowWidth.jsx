import React, { useEffect, useState } from 'react'

function getWindowWidth() {
    if (typeof window === "undefined") return 0;
    return window.innerWidth;
}

const useWindowWidth = () => {

    const [width, setWidth] = useState(getWindowWidth);

    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [])

    return width;

}

export default useWindowWidth

// import { useEffect, useState } from "react";

// export function useWindowWidth(delay = 150) {
//   const [width, setWidth] = useState(() =>
//     typeof window === "undefined" ? 0 : window.innerWidth
//   );

//   useEffect(() => {
//     let timeoutId;

//     function handleResize() {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         setWidth(window.innerWidth);
//       }, delay);
//     }

//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [delay]);

//   return width;
// }

