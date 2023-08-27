import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const Button = ({ children, ...props }: Props) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;