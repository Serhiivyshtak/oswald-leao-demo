// External packages
import type {JSX} from 'react';

// Custom components
import {HeaderSection} from '../sections/Header.section';


export function AboutView(): JSX.Element {
    return (
        <div className="w-screen h-max min-h-screen bg-gray">
            <HeaderSection />
        </div>
    );
}
