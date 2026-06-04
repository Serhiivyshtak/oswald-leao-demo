// External packages
import type {JSX} from 'react';
import {Link} from 'react-router-dom';
import {t} from 'i18next';

// Custom components
import {LogoComponent} from '../components/Logo.component';


export function FooterSection(): JSX.Element {
    const descriptionContent: string = t('footerSection.description');
    const copyrightContent: string = t('footerSection.copyright');
    const creditContent: string = t('footerSection.credit');
    const websiteCreatorNameContent: string = t('footerSection.websiteCreator.name');
    const websiteCreatorLinkContent: string = t('footerSection.websiteCreator.link');
    const whoAmILinkContent: string = t('footerSection.whoAmILink');
    const myPortfolioLinkContent: string = t('footerSection.myPortfolioLink');
    const legalNoticeLinkContent: string = t('footerSection.legalNoticeLink');
    const currentYear: number = new Date().getFullYear();


    return (
        <footer className="w-screen h-max border-t border-light py-huge px-huge flex flex-col items-center gap-middle">
            <LogoComponent />
            <div className="w-full h-max flex flex-col items-center gap-middle 768:flex-row 768:justify-between 768:items-start 768:gap-compact">
                <p 
                    className="
                        h-max text-light font-secondary
                        text-base_1270 leading-base_1270 
                        1440:text-base_1440 1440:leading-base_1440 
                        1920:text-base_1920 1920:leading-base_1920
                        w-full text-center 768:w-4/12 768:text-start"
                    >
                    {descriptionContent}
                </p>
                <nav className="w-max h-max flex gap-compact">
                    <Link to="/about" className="w-max h-max text-light/30 font-additional uppercase font-light hover:text-light duration-(--duration-fast)">
                        {whoAmILinkContent}
                    </Link>
                    <Link to="/portfolio" className="w-max h-max text-light/30 font-additional uppercase font-light hover:text-light duration-(--duration-fast)">
                        {myPortfolioLinkContent}
                    </Link>
                    <Link to="" className="w-max h-max text-light/30 font-additional uppercase font-light hover:text-light duration-(--duration-fast)">
                        {legalNoticeLinkContent}
                    </Link>
                </nav>
            </div>
            <div className="w-full h-max flex flex-col items-center gap-middle 768:flex-row 768:justify-between 768:items-start 768:gap-compact">
                <p 
                    className="
                        w-max h-max text-light/30 font-secondary 
                        text-small_1270 leading-small_1270 
                        1440:text-small_1440 1440:leading-small_1440 
                        1920:text-small_1920 1920:leading-small_1920"
                    >
                    {creditContent} <a className="text-light font-additional uppercase font-light" href={websiteCreatorLinkContent} target="_blank">{websiteCreatorNameContent}</a>         
                </p>
                <p 
                    className="
                        w-max h-max text-light/30 font-secondary 
                        text-small_1270 leading-small_1270 
                        1440:text-small_1440 1440:leading-small_1440 
                        1920:text-small_1920 1920:leading-small_1920"
                    >
                    {copyrightContent + ' ' + currentYear}
                </p>
            </div>
        </footer>
    );
}