// External packages
import type {JSX} from 'react';

// Custom components
import {HeaderSection} from '../sections/Header.section';
import {HeroSection} from '../sections/Hero.section';
import {SatisfyingFactsSection} from '../sections/SatisfyingFacts.section';
import {MyEducationSection} from '../sections/MyEducation.section';
import {MyExperienceSection} from '../sections/MyExperience.section';
import {IntroComponent} from '../components/Intro.component';



export function AboutView(): JSX.Element {
    return (
        <div className="w-screen h-max min-h-screen bg-gray">
            <HeaderSection />
            <HeroSection />
            <SatisfyingFactsSection />
            <MyEducationSection />
            <MyExperienceSection />
            <IntroComponent />
        </div>
    );
}
