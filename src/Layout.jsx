import { Routes, Route } from "react-router-dom";
import {Navigation} from './Navigation';
import { QrCodeGenerator } from './QrCodeGenerator'
import { QrCodeScanner } from './QrCodeScanner'
const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
            </Routes>
        </div>
    );
};

export { Layout };