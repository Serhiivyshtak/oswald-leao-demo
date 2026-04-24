import type { JSX } from "react";
import CardComponent from '../components/Card.component';
import cardsContent from '../assets/json/cardsContent.json';

export default function MainSection(): JSX.Element {
    return (
        <section className="w-screen h-screen grid grid-rows-2 grid-cols-12">
            {cardsContent.map((cardContent: any) => (
                <CardComponent
                    key={cardContent.id}
                    identifier={cardContent.id}
                    title={cardContent.title}
                    positioningStylings={cardContent.positioningStyings}
                    isVertical={cardContent.isVertical}>
                    {cardContent.html}
                </CardComponent>
            ))}
        </section>
    );
}