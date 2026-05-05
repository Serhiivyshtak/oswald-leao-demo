import { useEffect, useState } from "react";
import type { DomInfoObjectType } from "../types/DomInfoObject.type";


export default function useDomInfo(): DomInfoObjectType {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function onResizehandler() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', onResizehandler);

        setWindowWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', onResizehandler);
        }
    }, []);

    return {windowWidth, isMobile};
}