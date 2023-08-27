import { useState,useRef } from "react";
import React from "react";
import LoginButton from "@/components/loginbutton";

interface LoginModelProps {
    handleCloseLogin: () => void;
    setAcountName: (name: string) => void;
    setAcountNumber: (number: number) => void;
}

const LoginModel: React.FC<LoginModelProps> = ({ handleCloseLogin,setAcountName,setAcountNumber }) => {
    const userNameRef = useRef<HTMLInputElement>(null);
    const userIdRef = useRef<HTMLInputElement>(null);
    const submitLogin = () => [
        setAcountName(userNameRef.current?.value || ""),
        setAcountNumber(Number(userIdRef.current?.value || "")),
        console.log(userNameRef.current?.value),
        console.log(userIdRef.current?.value),
        handleCloseLogin()
    ]

    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
            <div className="flex flex-col items-center justify-center">
                <article className="bg-white rounded-md m-auto p-10 ">
                    <div className="rounded flex flex-col">
                        <label>名前</label>
                        <input type="text" ref={userNameRef} className="py-1 px-4 border rounded"/>
                        <label>ID</label>
                        <input type="text" ref={userIdRef} className="py-1 px-4 border rounded"/>
                    </div>
                    <LoginButton onClick={submitLogin}>ログイン</LoginButton>
                    <button className="mt-4 bg-gray-500 text-white px-3 py-1 rounded" onClick={()=>handleCloseLogin()}>
                        閉じる
                    </button>
                </article>
            </div>
        </div>
    );
};

export default LoginModel;
