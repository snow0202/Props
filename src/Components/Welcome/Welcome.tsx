import React, { useState } from "react";
import styles from "./Welcome.module.css";
import { motion } from 'framer-motion';
import {
  INITIAL_OPACITY,
  ANIMATE_OPACITY,
  TRANSITION_DURATION,
  TRANSITION_DELAY,
  SEND_STRING
} from '../../utils/constants';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Welcome: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send-email', formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className={styles.back}
      initial={{ opacity: INITIAL_OPACITY }}
      animate={{ opacity: ANIMATE_OPACITY }}
      transition={{ duration: TRANSITION_DURATION, delay: TRANSITION_DELAY }}>
      <div className={styles.menu}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="name"
            type="text"
            className={styles.feedbackInput}
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            className={styles.feedbackInput}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className={styles.feedbackInput}
            placeholder="Comment"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value={SEND_STRING} className={styles.submitButton} />
        </form>
      </div>
    </motion.div>
  );
};
