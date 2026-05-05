import type { JSX } from 'react';
import CardComponent from '../components/Card.component';
import { useTranslation } from 'react-i18next';
import type { CardObjectType } from '../types/CardObject.type';


export default function MainSection(): JSX.Element {
    const { t } = useTranslation();
    const cards: Array<CardObjectType> = t('cards', {returnObjects: true}) as Array<CardObjectType>;


    function renderCards(): JSX.Element[] {
        return cards.map((card: CardObjectType) => 
            <CardComponent 
                key={card.id} 
                id={card.id} 
                title={card.title} 
                positioningStylings={card.positioningStylings} 
                childComponentName={card.childComponentName} 
                isVertical={card.isVertical}
                hasLogo={card.hasLogo}
            />
        );
    }

    
    return (
        <section 
            className="
                w-screen h-max grid grid-rows-6 grid-cols-1
                768:portrait:grid-rows-3 768:portrait:grid-cols-12 768:h-screen
                768:landscape:grid-rows-2 768:landscape:grid-cols-12"
            >
            {renderCards()}
        </section>
    );
}
