import {useEffect, useLayoutEffect, useRef, useState, type JSX} from 'react';
import {gsap} from 'gsap';
import {useCssProperty} from '../hooks/useCssPropery.hook';
import {useTranslation} from 'react-i18next';


export function IntroComponent(): JSX.Element {
    const {t} = useTranslation();
    const component = useRef<HTMLDivElement|null>(null);
    const [showIntro, setShowIntro] = useState<boolean>(true);
    const colorLight: string = useCssProperty('--color-light') as string;
    const colorGray: string = useCssProperty('--color-gray') as string;
    const loadingBarStylings: React.CSSProperties = {background: `linear-gradient(90deg, ${colorGray} 1%, ${colorLight} 1%)`};
    const introText: string = t('introText');


    useLayoutEffect(() => {
        setTimeout(() => {
            setShowIntro(false);
        }, 2000);
    }, []);


    useEffect(() => {
        const gsapTimeline = gsap.timeline();
        if (!showIntro) {
            gsapTimeline
            .to('.loading_bar', {background: `linear-gradient(90deg, ${colorGray} 100%, ${colorLight} 100%)`})
            .to('.intro', {opacity: 0, display: 'none', delay: 1});
        }
    }, [showIntro]);


    return (
        <div ref={component} className="intro fixed top-0 left-0 w-screen h-screen bg-gray z-20 flex justify-center items-center">
            <div className="h-max w-max flex flex-col items-end gap-small">
                <div style={loadingBarStylings} className="loading_bar w-70 h-3.5 border border-light"></div>
                <p className="text-light font-secondary text-base_1270 leading-base_1270 1440:text-base_1440 1440:leading-base_1440 1920:text-base_1920 1920:leading-base_1920">
                    {introText}...
                </p>
            </div>
        </div>   
    );
}