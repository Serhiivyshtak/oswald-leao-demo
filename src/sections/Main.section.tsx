import type { JSX } from 'react';
import CardComponent from '../components/Card.component';
import { useTranslation } from 'react-i18next';
import type { CardComponentProps } from '../types/CardComponentProps.type';


export default function MainSection(): JSX.Element {
    const { t } = useTranslation();
    const cards: Array<CardComponentProps> = t('cards', {returnObjects: true}) as Array<CardComponentProps>;


    function renderCards(): JSX.Element[] {
        return cards.map((card: CardComponentProps) => 
            <CardComponent 
                key={card.id} 
                id={card.id} 
                title={card.title} 
                positioningStylings={card.positioningStylings} 
                childComponentName={card.childComponentName} 
                isVertical={card.isVertical}
            />
        );
    }

    
    return (
        <section className="w-screen h-screen grid grid-rows-2 grid-cols-12">
            {renderCards()}
        </section>
    );
}
