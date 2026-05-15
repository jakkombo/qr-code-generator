import { SCAN_DATA } from '../constants';

import s from './ScanHistory.module.css';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className={s.container}>
            <h1 className={s.title}>Scan History</h1>

            {data.length === 0 ? (
                <p className={s.empty}>No scanned QR codes yet</p>
            ) : (
                <div className={s.list}>
                    {data.map((text) => (
                        <div className={s.card} key={text}>
                            <p className={s.text}>{text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
