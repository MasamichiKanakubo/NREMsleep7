import Roulette from "@/components/roulette";
import React from "react";

interface RouletteModelProps {
    closeModal: () => void;
}
export const RouletteModal: React.FC<RouletteModelProps> = ({ closeModal }) => {
    return (

        // <Popup
        //     modal
        //     trigger={<button>open</button>}
        //     closeOnDocumentClick
        // >
        //     <div className={"w-full h-full flex flex-col justify-center items-center"}>
        //         <Roulette />
        //         <button >close</button>
        //     </div>
        // </Popup>
        <div　className="flex flex-col items-center justify-center">
            <article className="bg-white">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <Roulette />
                </div>
                <button className="mt-4 bg-gray-500 text-white px-3 py-1 rounded" onClick={closeModal}>
                    閉じる
                </button>
            </article>
        </div>
    );
};