import Popup from "reactjs-popup";
import Roulette from "@/components/roulette";
export const Roulettemodal = () => {
    return (
        <Popup
            modal
            trigger={<button>open</button>}
            closeOnDocumentClick
        >
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <Roulette />
                <button >close</button>
            </div>
        </Popup>
    );
};