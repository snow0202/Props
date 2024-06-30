import React, { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import { motion } from 'framer-motion';
import { Menu } from "./Menu/Menu";
import { LOADING_STRING_TIME, 
  WELCOM_TITLE, 
  WELCOM_STRING,
  INITIAL_OPACITY,
  ANIMATE_OPACITY,
  TRANSITION_DURATION,
  TRANSITION_DELAY
} from '../../utils/constants';

export const Welcome: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // ページがロードされた後、2.6秒後に要素を表示させる
    setTimeout(() => {
      setIsLoaded(true);
    }, LOADING_STRING_TIME);
  }, []);

  return (
    <motion.div
      className={styles.back}
      initial={{ opacity: INITIAL_OPACITY }}
      animate={{ opacity: ANIMATE_OPACITY }}
      transition={{ duration: TRANSITION_DURATION, delay: TRANSITION_DELAY }}>
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ""}`}>
        <h1 className={styles.title}>{WELCOM_TITLE}</h1>
        <p className={styles.description}>{WELCOM_STRING}</p>
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </motion.div>
  );
};


