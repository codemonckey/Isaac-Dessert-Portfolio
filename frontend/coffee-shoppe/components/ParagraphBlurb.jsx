import React from 'react'
import styles from "../styles/ParagraphBlurb.module.css"


export const ParagraphBlurb = (props) => {
    return (
      <div className={styles.paragraphContainer}>
        <p className={styles.header} style={{color: props.color}}>{props.header}</p>
         <p className={styles.text} style={{color: props.color}}>{props.text}</p> 
      </div>
    )
}
export default ParagraphBlurb;