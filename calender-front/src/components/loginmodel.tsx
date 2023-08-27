import {useState} from "react";
import React from "react";
import LoginButton from "@/components/loginbutton";

interface LoginModelProps {
    closeModal: () => void;
}

const LoginModel: React.FC<LoginModelProps> = ({ closeModal }) => {
    const [userName, setUserName] = useState<null | string>(null)
    const [userId, setUserId] = useState<null | string>(null)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value)
    }

    const handleLogin = () => {
        console.log('Name: ',userName);
        console.log('ID: ',userId);
    }

    return (
        <div　className="flex flex-col items-center justify-center">
            <article className="bg-white">
                <div className="rounded flex flex-col">
                    <label>名前</label>
                    <input type="text" value={userName || ''} className="py-1 px-4 border rounded" onChange={handleNameChange}/>
                    <label>ID</label>
                    <input type="text" value={userId || ''} className="py-1 px-4 border rounded" onChange={handleIdChange}/>
                </div>
                <LoginButton onClick={handleLogin}>ログイン</LoginButton>
                <button className="mt-4 bg-gray-500 text-white px-3 py-1 rounded" onClick={closeModal}>
                    閉じる
                </button>
            </article>
        </div>
    );
};

export default LoginModel;