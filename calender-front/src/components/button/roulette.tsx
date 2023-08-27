import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const RouletteButton = ({ children, onClick, ...props }: Props) => {
    return (
        <button
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full"
            onClick = {onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default RouletteButton;