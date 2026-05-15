import { Link } from 'react-router-dom';

import s from './MainPage.module.css';

export const MainPage = () => {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <h1 className={s.title}>QR Code App</h1>

                <p className={s.text}>
                    Generate QR codes, scan them and save your history.
                </p>

                <div className={s.buttons}>
                    <Link className={s.button} to="/qr-code/generate">
                        Generate
                    </Link>

                    <Link className={s.buttonSecond} to="/qr-code/scan">
                        Scan
                    </Link>
                </div>
            </div>
        </div>
    );
};