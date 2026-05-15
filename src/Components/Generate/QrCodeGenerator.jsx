import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { GENERATE_DATA } from '../../constants';

import s from './qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        if (value.trim() === '') return;

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className={s.container}>
            <div className={s.box}>
                <h1 className={s.title}>Generate QR Code</h1>

                <input
                    type="text"
                    value={value}
                    placeholder="Enter text"
                    onChange={onChangeHandler}
                    className={s.input}
                />

                <button
                    type="button"
                    className={s.button}
                    onClick={onClickHandler}
                >
                    Generate
                </button>

                {result !== '' && (
                    <div className={s.result}>
                        <QRCodeSVG value={result} size={180} />
                    </div>
                )}
            </div>
        </div>
    );
};