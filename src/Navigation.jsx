import { Link } from "react-router-dom"
export const Navigation = () => {
    return (
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/generate">Generate QR code</Link>
            <Link to="/scan">Scan QR Code</Link>
            <Link to="/">Scan History</Link>
            <Link to="/">Generate History</Link>
        </nav>
    );
};