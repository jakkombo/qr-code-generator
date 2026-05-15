import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';

import s from './GenerateHistory.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className={s.container}>
            <h1 className={s.title}>Generation History</h1>

            {data.length === 0 ? (
                <p className={s.empty}>No generated QR codes yet</p>
            ) : (
                <div className={s.list}>
                    {data.map((text) => (
                        <div className={s.card} key={text}>
                            <p className={s.text}>{text}</p>

                            <div className={s.qrBox}>
                                <QRCodeSVG value={text} size={90} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
