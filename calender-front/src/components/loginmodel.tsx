import {useState} from "react";
import React from "react";
import LoginButton from "@/components/loginbutton";

const LoginModel = () => {
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
        <div>
            <div>
                <label>名前</label>
                <input type="text" value={userName || ''} onChange={handleNameChange}/>
                <label>ID</label>
                <input type="text" value={userId || ''} onChange={handleIdChange}/>
            </div>
            <LoginButton onClick={handleLogin}>ログイン</LoginButton>
        </div>
    );
};

export default LoginModel;