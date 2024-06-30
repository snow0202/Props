import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';
import { motion } from 'framer-motion';
import { Button } from '../../utils/Button/Button';
import { Loading } from '../../utils/Loading/Loading';

export const Main: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const name: string = "Enter";

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/Welcome');
        }, 2000);
    };
    return (
        <motion.div
            className={styles.main}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1 }}>
            {isLoading ? <Loading /> : <Button name={name} onClick={handleClick} />}
        </motion.div>
    );
}