import React, { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import { Menu } from "../Components/Menu/Menu";

export const Welcome: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ページがロードされた後、1秒後に要素を表示させる
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className={styles.back}>
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ""}`}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.description}>We offer amazing animations!</p>
      </div>
      <Menu />
    </div>
  );
};


