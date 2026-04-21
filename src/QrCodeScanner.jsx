import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
    };

    const settings  = {
        audio: false,
        finder: false,
    };

    const stylesSettings = {
        container: { width: 400 }
    };

    return (
        <div className={s.container}>
            
            
            <Scanner allowMultiple={true} onScan={scanHandler} components={settings}
            styles={stylesSettings} 
            />
        <p className={s.result}>{scanned}</p>
        </div>
    );
};