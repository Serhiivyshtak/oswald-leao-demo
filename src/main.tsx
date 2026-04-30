import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorBoundary } from "react-error-boundary";
import './services/i18n.service';
import './assets/css/index.css';
import MainView from './views/Main.view';
import AboutView from './views/About.view';
import ErrorView from './views/Error.view';


const root: HTMLElement | null = document.getElementById('root');


if (!root) {
    throw new Error('Failed to find the root element');
}


ReactDOM.createRoot(root).render(
    <ErrorBoundary FallbackComponent={ErrorView}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/about" element={<AboutView />} />
            </Routes>
        </BrowserRouter>
    </ErrorBoundary>
);
