import React, { useState, useEffect } from 'react';
import RouletteButton from "@/components/roulettebutton";

const Roulette: React.FC = () => {
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [currentNumber, setCurrentNumber] = useState("00:00");

    useEffect(() => {
        if (spinning) {
            const interval = setInterval(() => {
                const hour = Math.floor(Math.random() * 24).toString().padStart(2, "0");
                const minutes = Math.floor(Math.random() * 60).toString().padStart(2,"0");
                const formattedTime = `${hour}:${minutes}`;
                setCurrentNumber(formattedTime);
            }, 100); // 数字が変わる速度を調整

            return () => {
                clearInterval(interval);
            };
        }
    }, [spinning]);

    const startSpinning = () => {
        setSpinning(true);
        setTimeout(() => {
            const time = '00:00' // ここにランダムに出した答えを書く
            setResult(time);
            setSpinning(false);
        }, 3000); // 3秒後にルーレットを停止
    };

    return (
        <div>
            {result !== null && <div>{result}<br />に決まりました</div>}
            {result == null && <div className="roulette-number">{currentNumber}<br />...</div>}
            <RouletteButton onClick={startSpinning}>ルーレットを回す</RouletteButton>

        </div>
    );
};

export default Roulette;
