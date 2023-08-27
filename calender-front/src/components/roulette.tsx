import React, { useState } from 'react';
import RouletteButton from "@/components/roulettebutton";

const Roulette: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const handleSpin = () => {// ルーレットのロジック。ここでは適当な数字を生成して表示します。
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setResult(randomNumber);
        console.log("spin");
    };

    return (
        <div>
            <RouletteButton onClick={handleSpin}>Spin the Roulette</RouletteButton>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default Roulette;
