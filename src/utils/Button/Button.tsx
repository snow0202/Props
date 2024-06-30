import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    name?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        if (props.onClick) {
            props.onClick();
        } else {
            navigate('/Welcome');
        }
    };
    return (
        <>
            <button className={styles.button} onClick={handleLogin}>
                {props.name}
            </button>
        </>
    );
};
