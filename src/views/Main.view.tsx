import type { JSX } from 'react';
import {FixedBackground} from '../components/FixedBackground.component';
import {MainSection} from '../sections/Main.section';
import {IntroComponent} from '../components/Intro.component';


export function MainView(): JSX.Element {
    return (
        <>
            <FixedBackground backgroundImageUrl="fixed_background_image.png" />
            <MainSection />
            <IntroComponent />
        </>
    );
}
