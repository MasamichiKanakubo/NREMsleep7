import React, { useState } from 'react';
import RouletteButton from "@/components/roulettebutton";

const Roulette: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const handleSpin = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setResult(randomNumber);
        console.log("spin");
    };

    return (
        <div>
            <RouletteButton onClick={handleSpin}>ルーレットを回す</RouletteButton>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default Roulette;
