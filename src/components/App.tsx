import FixedBackground from './FixedBackground';
import Card from './Card';

import cardsContent from '../assets/json/cardsContent.json';

export default function App() {
    return (
        <>
            <FixedBackground backgroundImage="test_image.png" />
            <section className="w-screen h-screen grid grid-rows-2 grid-cols-12">
                {cardsContent.map((cardContent: any) => (
                    <Card
                        key={cardContent.id}
                        identifier={cardContent.id}
                        title={cardContent.title}
                        positioningStylings={cardContent.positioningStyings}
                        isVertical={cardContent.isVertical}>
                        {cardContent.html}
                    </Card>
                ))}
            </section>
        </>
    );
}
