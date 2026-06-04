// External packages
import {useEffect, type JSX} from 'react';
import {gsap} from 'gsap';

// Custom components
import {RedirectionLinkWithIconComponent} from './RedirectionLinkWithIcon.component';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

// Custom types
import type {ImageViwerObjectType} from '../types/ImageViewerObject.type';


export function ImageViewerComponent({showImageViewer, imageSrc, onCloseHandler}: ImageViwerObjectType): JSX.Element {
    const largeSpacing: number = useCssProperty('--spacing-large') as number;


    useEffect(() => {
        if (showImageViewer) {
            gsap.to('.image_viwer', {opacity: 1, display: 'flex'});
        } else {
            gsap.to('.image_viwer', {opacity: 0, display: 'none'});
        }
    }, [showImageViewer]);


    return (
        <div 
            onClick={onCloseHandler}  
            className="image_viwer fixed top-0 left-0 w-screen h-screen z-10 p-small 430:p-compact flex justify-center bg-black/95"
            >
            <img 
                onClick={e => e.stopPropagation()}
                src={imageSrc}
                alt="Portfolio piece"
                className="object-contain" 
            />
            <RedirectionLinkWithIconComponent
                className="fixed top-compact right-compact"
                icon="material-symbols-light:close" 
                size={largeSpacing} 
                href=""
                isInternal={true}            
            />
        </div>
    );
}