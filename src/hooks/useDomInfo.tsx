import { useEffect, useState } from "react";
import type { DomInfoObjectType } from "../types/DomInfoObject.type";


export function useDomInfo(): DomInfoObjectType {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function onResizehandler() {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', onResizehandler);

        onResizehandler();

        return () => {
            window.removeEventListener('resize', onResizehandler);
        }
    }, []);

    return {windowWidth, windowHeight, isMobile};
}