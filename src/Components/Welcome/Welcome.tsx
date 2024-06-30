import React, { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import { motion } from 'framer-motion';
import { Menu } from "./Menu/Menu";

export const Welcome: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ページがロードされた後、2.6秒後に要素を表示させる
    setTimeout(() => {
      setIsLoaded(true);
    }, 2600);
  }, []);

  return (
    <motion.div
      className={styles.back}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 1 }}>
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ""}`}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.description}>We offer amazing animations!</p>
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </motion.div>
  );
};


