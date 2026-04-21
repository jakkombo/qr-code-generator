import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCodeGenerator.module.css';


export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = (event) => {
        // console.log('sdadsadas', event)

        setResult(value);
        setValue('');

    };

    const  onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    console.log('result:', result);

    return (
        <div className={s.container}>
            <input 
            type="text"
            value={value}
            placeholder='Enter text...'
            onChange={onChangeHandler}
            className={s.input} 
            />
            <button type="button" className={s.button} onClick={onClickHandler}>
                Generate
            </button>

            {result !== '' && (
                <div className={s.qrWrapper}>

                    <QRCodeSVG value={result} size={250} />
                </div>    
            )}
        
        </div>
    );
};
