import React, { useState } from "react";
import Roulette from "@/components/roulette";

interface RouletteModalProps {
    closeModal: () => void;
}

export const RouletteModal: React.FC<RouletteModalProps> = ({ closeModal }) => {

    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
            <div className="bg-white rounded-md mt-60 m-auto pt-5 p-10">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <Roulette  />
                </div>
                <button className="mt-4 bg-gray-500 text-white px-3 py-1 rounded" onClick={closeModal}>
                    閉じる
                </button>
            </div>
        </div>
    );
};
export default RouletteModal;
