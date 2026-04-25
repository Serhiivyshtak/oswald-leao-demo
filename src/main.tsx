import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './assets/css/index.css';
import MainView from './views/Main.view';
import AboutView from './views/About.view';

const root: HTMLElement | null = document.getElementById('root');

if (!root) {
    throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
        </Routes>
    </BrowserRouter>,
);
