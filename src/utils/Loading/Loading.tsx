import React from 'react';
import styles from './Loading.module.css';

export const Loading: React.FC = () => {
  return (
    <div id="loading-wrapper" className={styles.loadingWrapper}>
      <div id="loading-text" className={styles.loadingText}>LOADING</div>
      <div id="loading-content" className={styles.loadingContent}></div>
    </div>
  );
};