import React from "react";
import { FC } from "react";

export type ModalProps = {
  modalOpen:boolean;
  handleClose:() => void;
  handleSubmit:() => void;
  modalInputRef:React.RefObject<HTMLInputElement>;
}

const Modal:FC<ModalProps> = ({ modalOpen, handleClose, handleSubmit, modalInputRef }) =>{

  if (!modalOpen) {
    return null;
  }

  return (
    <div className="block absolute z-10 pt-100 w-full h-full overflow-auto bg-black bg-opacity-80">
      <div className="bg-white rounded-md mt-60 m-auto pt-5 p-10 ">
        <button className="text-gray-400 float-right text-3xl font-bold hover:text-black focus:text-black" onClick={handleClose}>&times;</button>
        <label htmlFor="date">曜日 </label>
        <input type="date" name="曜日" list="day-of-week-list"/>
        <datalist id="day-of-week-list">
          <option value="日"></option>
          <option value="月"></option>
          <option value="火"></option>
          <option value="水"></option>
          <option value="木"></option>
          <option value="金"></option>
          <option value="土"></option>
        </datalist>
        <label htmlFor="time"> 開始時刻 </label>
        <input type="time" name="開始時刻" className="rounded-sm p-2" min="9:00" max="22:00" step="3600" list="data-list" />
        <label htmlFor="time"> 終了時刻 </label>
        <input type="time" name="終了時刻" className="rounded-sm p-2" min="9:00" max="22:00" step="3600" list="data-list" />
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
        <input type="text" className='justify-around mr-2 rounded-sm p-1 placeholder:text-gray-500' ref={modalInputRef} placeholder=' 理由' />
        <button className="rounded-md border border-black p-1" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
