// External packages
import type {JSX} from 'react';
import {NavLink} from 'react-router-dom';
import {t} from 'i18next';

// Custom components
import {LogoComponent} from '../components/Logo.component';

export function HeaderSection(): JSX.Element {
    const navigationLinkClassList: string = 'w-max h-max font-additional uppercase font-light hover:text-light duration-(--duration-fast) hidden 768:block';
    const whoAmILinkContent: string = t('headerSection.whoAmILink');
    const myPortfolioLinkContent: string = t('headerSection.myPortfolioLink');
    
    return (
        <header className="w-screen h-max border-b border-light py-compact px-huge flex items-center justify-center 768:justify-between">
            <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? navigationLinkClassList + ' ' + 'text-light' : navigationLinkClassList + ' ' + 'text-light/30'}>
                {whoAmILinkContent}
            </NavLink>
            <LogoComponent />
            <NavLink 
                to="/portfolio" 
                className={({isActive}) => isActive ? navigationLinkClassList + ' ' + 'text-light' : navigationLinkClassList + ' ' + 'text-light/30'}>
                {myPortfolioLinkContent}
            </NavLink>
        </header>
    );
}