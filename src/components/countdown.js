import * as React from "react";
import { useState, useRef, useEffect } from "react";

import * as styles from "./countdown.module.css";


function pad(number, maxLength, padChar) {
    let str = number + "";

    while (str.length < maxLength)
        str = padChar + str;
    
    return str;
}

export default function CountdownTimer() {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('June 11, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const diff = countdownDate - (new Date()).getTime();

            if (diff < 0) {
                // stop timer
                clearInterval(interval.current);
            }

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const m = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            const s = Math.floor(diff % (1000 * 60) / 1000);

            setDays(pad(d, 2, '0'));
            setHours(pad(h, 2, '0'));
            setMinutes(pad(m, 2, '0'));
            setSeconds(pad(s, 2, '0'));
        }, 1000)
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        };
    });


    return (
        <div className="countdown flex flex-row justify-center">
            <div className={styles.card}>
                <p className={styles.value}>{days}</p>
                <p className={styles.label}>Days</p>
            </div>
            <div className={styles.card}>
                <p className={styles.value}>{hours}</p>
                <p className={styles.label}>Hours</p>
            </div>
            <div className={styles.card}>
                <p className={styles.value}>{minutes}</p>
                <p className={styles.label}>Minutes</p>
            </div>
            <div className={styles.card}>
                <p className={styles.value}>{seconds}</p>
                <p className={styles.label}>Seconds</p>
            </div>
        </div>
    )
}