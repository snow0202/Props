import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WELCOM_URL, 
    CHANGE_IMAGE_TIME, 
    BUTTON_NAME,
    INITIAL_OPACITY,
    ANIMATE_OPACITY,
    TRANSITION_DURATION,
    TRANSITION_DELAY
 } from '../../utils/constants';
import styles from './Main.module.css';
import { motion } from 'framer-motion';
import { Button } from '../../utils/Button/Button';
import { Loading } from '../../utils/Loading/Loading';

export const Main: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate(WELCOM_URL);
        }, CHANGE_IMAGE_TIME);
    };
    return (
        <motion.div
            className={styles.main}
            initial={{ opacity: INITIAL_OPACITY }}
            animate={{ opacity: ANIMATE_OPACITY }}
            transition={{ duration: TRANSITION_DURATION, delay: TRANSITION_DELAY }}>
            {isLoading ? <Loading /> : <Button name={BUTTON_NAME} onClick={handleClick} />}
        </motion.div>
    );
}