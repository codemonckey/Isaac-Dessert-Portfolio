import React, { useState } from 'react';
import styles from '../styles/Signature.module.css'

const first_name = "ISAAC"
const last_name = "DESSERT"
export const AttractiveSignature = () => {
  return (
    <div className= {styles.signature}>
      <div className={styles.namingContainer}>
        {first_name.split("").map(function(letter, idx) { 
          const [animated, setAnimated] = useState(true);
                return (
                <div 
                    onMouseEnter={() => setAnimated(() => true)}
                    onAnimationEnd={() => setAnimated(() => false)}
                    className={animated ? styles.namingLetters : styles.namingLettersNoAnimation} key={idx}>
                {letter}
                </div>
                )
            })}
        </div>
      <div className={styles.namingContainer}>
            {last_name.split("").map(function(letter, idx) { 
              const [animated, setAnimated] = useState(true);
                return (
                <div
                  onMouseEnter={() => setAnimated(() => true)}
                 onAnimationEnd={() => setAnimated(() => false)}
                 className={animated ? styles.namingLetters : styles.namingLettersNoAnimation} key={idx}>
                {letter}
                </div>
                )
            })}
      </div>
    </div>
    );
};

export default AttractiveSignature;