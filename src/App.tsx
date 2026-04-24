import FixedBackground from './components/FixedBackground.component';
import MainSection from './sections/Main.section';

export default function App() {
    return (
        <>
            <FixedBackground backgroundImage="test_image.png" />
            <MainSection />
        </>
    );
}
