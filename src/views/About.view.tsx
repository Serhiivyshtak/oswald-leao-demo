// External packages
import type {JSX} from 'react';

// Custom components
import {HeaderSection} from '../sections/Header.section';
import {IntroComponent} from '../components/Intro.component';
import {HeroSection} from '../sections/Hero.section';
import {SatisfyingFactsSection} from '../sections/SatisfyingFacts.section';
import {EducationSection} from '../sections/Education.section';
import {ExperienceSection} from '../sections/Experience.section';
import {ContactSection} from '../sections/Contact.section';
import {FooterSection} from '../sections/Footer.section';



export function AboutView(): JSX.Element {
    return (
        <div className="w-screen h-max min-h-screen bg-gray">
            <HeaderSection />
            <HeroSection />
            <SatisfyingFactsSection />
            <EducationSection />
            <ExperienceSection />
            <IntroComponent />
            <ContactSection />
            <FooterSection />
        </div>
    );
}
