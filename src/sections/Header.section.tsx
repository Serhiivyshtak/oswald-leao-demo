// External packages
import type {JSX} from 'react';
import {LogoComponent} from '../components/Logo.component';
import {NavLink} from 'react-router-dom';
import {t} from 'i18next';


export function HeaderSection(): JSX.Element {
    const navigationLinkClassList: string = 'w-max h-max font-additional font-light hover:text-light duration-150';
    const whoAmILinkText: string = t('whoAmILinkText');
    const myPortfolioLinkText: string = t('myPortfolioLinkText');
    
    return (
        <header className="w-screen h-max border-b border-light py-compact px-huge flex justify-between items-center">
            <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? navigationLinkClassList + ' ' + 'text-light' : navigationLinkClassList + ' ' + 'text-light/30'}>
                {whoAmILinkText}
            </NavLink>
            <LogoComponent />
            <NavLink 
                to="/portfolio" 
                className={({isActive}) => isActive ? navigationLinkClassList + ' ' + 'text-light' : navigationLinkClassList + ' ' + 'text-light/30'}>
                {myPortfolioLinkText}
            </NavLink>
        </header>
    );
}