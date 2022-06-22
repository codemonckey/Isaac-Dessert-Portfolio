import React from 'react'
import styles from "../styles/ParagraphBlurb.module.css"


export const ParagraphBlurb = (props) => {
    return (
      <div className={styles.paragraphContainer}>
        <p className={styles.header}>{props.header}</p>
         <p className={styles.text}>{props.text}</p> 
      </div>
    )
}
export default ParagraphBlurb;