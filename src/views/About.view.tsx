// External packages
import type {JSX} from 'react';

// Custom components
import {HeaderSection} from '../sections/Header.section';
import {SatisfyingFactsSection} from '../sections/SatisfyingFacts.section';
import {MyEducationSection} from '../sections/MyEducation.section';



export function AboutView(): JSX.Element {
    return (
        <div className="w-screen h-max min-h-screen bg-gray">
            <HeaderSection />
            <SatisfyingFactsSection />
            <MyEducationSection />
        </div>
    );
}
