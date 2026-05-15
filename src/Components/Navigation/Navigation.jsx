import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/qr-code/generate">Generate Code</Link>
            <Link to="/qr-code/scan">Scan code</Link>
            <Link to="/qr-code/generateHistory">Generation History</Link>
            <Link to="/qr-code/scanHistory">Scan history</Link>
        </nav>
    );
};