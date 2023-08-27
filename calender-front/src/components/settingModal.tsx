import React, { useRef, useState } from "react";
import { FC } from "react";

export type SettingModalProps = {
    handleSettingClose: () => void;
}

const SettingModal: FC<SettingModalProps> = ({ handleSettingClose }) => {
    const dayModalInputRef = useRef<HTMLInputElement>(null);
    const timeModalImputRef = useRef<HTMLInputElement>(null);

    const handleSetting = () => {
        const dateInput = dayModalInputRef;
        const endTimeInput = timeModalImputRef;
        handleSettingClose();
    };

    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
            <div className="bg-white rounded-md mt-60 m-auto pt-5 p-10 ">
                <button className="text-gray-400 float-right text-3xl font-bold hover:text-black focus:text-black" onClick={handleSettingClose}>&times;</button>
                <div className="mt-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 text-left"> 終了日 </label>
                    <input type="date" name="終了日" className="text-center mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" ref={dayModalInputRef}/>
                </div>
                <div className="mt-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 text-left"> 終了時刻 </label>
                    <input type="time" name="終了時刻" className="text-center mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" min="9:00" max="22:00" step="3600" list="data-list" ref={timeModalImputRef}/>
                    <datalist id="data-list">
                        <option value="00:00"></option>
                        <option value="01:00"></option>
                        <option value="02:00"></option>
                        <option value="03:00"></option>
                        <option value="04:00"></option>
                        <option value="05:00"></option>
                        <option value="06:00"></option>
                        <option value="07:00"></option>
                        <option value="08:00"></option>
                        <option value="09:00"></option>
                        <option value="10:00"></option>
                        <option value="11:00"></option>
                        <option value="12:00"></option>
                        <option value="13:00"></option>
                        <option value="14:00"></option>
                        <option value="15:00"></option>
                        <option value="16:00"></option>
                        <option value="17:00"></option>
                        <option value="18:00"></option>
                        <option value="19:00"></option>
                        <option value="20:00"></option>
                        <option value="21:00"></option>
                        <option value="22:00"></option>
                        <option value="23:00"></option>
                    </datalist>
                </div>
                <div className="mt-4">
                    <button className="rounded-md border border-black p-1" onClick={handleSetting}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default SettingModal;


