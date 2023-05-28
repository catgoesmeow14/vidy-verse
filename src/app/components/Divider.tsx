import React from 'react';
import styles from '../../styles/divider.module.css';

const Divider = () => {
  return (
    <div className="flex justify-center my-8">
      <div
        className={`h-4 w-4 rounded-full mx-2 ${styles['animate-divider']}`}
      ></div>
      <div
        className={`h-6 w-6 rounded-full mx-2 ${styles['animate-divider']}`}
      ></div>
      <div
        className={`h-8 w-8 rounded-full mx-2 ${styles['animate-divider']}`}
      ></div>
    </div>
  );
};

export default Divider;
