import React from "react";
import { FC } from "react";

export type ModalProps = {
  modalOpen: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  modalInputRef: React.RefObject<HTMLInputElement>;
}

const Modal: FC<ModalProps> = ({ modalOpen, handleClose, handleSubmit, modalInputRef }) => {

  if (!modalOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
      <div className="bg-white rounded-md mt-60 m-auto pt-5 p-10 ">
        <button className="text-gray-400 float-right text-3xl font-bold hover:text-black focus:text-black" onClick={handleClose}>&times;</button>
        <div className="mt-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 text-left">曜日 </label>
          <select name="曜日" id="day-of-week-list" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="day-of-week-list" className="text-center">日</option>
            <option value="day-of-week-list" className="text-center">月</option>
            <option value="day-of-week-list" className="text-center">火</option>
            <option value="day-of-week-list" className="text-center">水</option>
            <option value="day-of-week-list" className="text-center">木</option>
            <option value="day-of-week-list" className="text-center">金</option>
            <option value="day-of-week-list" className="text-center">土</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 text-left"> 開始時刻 </label>
          <input type="time" name="開始時刻" className="text-center mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" min="9:00" max="22:00" step="3600" list="data-list" />
        </div>
        <div className="mt-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 text-left"> 終了時刻 </label>
          <input type="time" name="終了時刻" className="text-center mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" min="9:00" max="22:00" step="3600" list="data-list" />
          <datalist id="data-list">
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
          </datalist>
        </div>
        <div className="mt-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700 text-left">理由 </label>
          <input type="text" className='justify-around mr-2 rounded-sm p-1 placeholder:text-gray-500' ref={modalInputRef} placeholder=' 理由を入力' />
        </div>
        <div className="mt-4">
          <button className="rounded-md border border-black p-1" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
