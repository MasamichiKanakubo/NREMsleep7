import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const LoginButton = ({ children, onClick, ...props }: Props) => {
    return (
        <button
            className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2.5 rounded"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default LoginButton;