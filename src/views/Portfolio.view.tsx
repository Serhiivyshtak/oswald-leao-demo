// External packages
import type {JSX} from 'react';

// Custom components
import {HeaderSection} from '../sections/Header.section';
import {IntroComponent} from '../components/Intro.component';
import {PortfolioSection} from '../sections/Portfolio.section';
import {ContactSection} from '../sections/Contact.section';
import {FooterSection} from '../sections/Footer.section';


export function PortfolioView(): JSX.Element {
    return (
        <div className="w-screen h-max min-h-screen bg-gray">
            <IntroComponent />
            <HeaderSection />
            <PortfolioSection />
            <ContactSection className="border-t border-light" />
            <FooterSection />
        </div>
    );
}   