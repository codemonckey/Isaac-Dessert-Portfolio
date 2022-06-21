import React from 'react';
import styles from '../styles/ProjectBar.module.css'

const experienceData =[{"image":"pics/download.jpeg","topic":"react","header":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh sapien, molestie non hendrerit eget, interdum ac nibh. Nam pellentesque ante vitae finibus blandit. Vestibulum ante ipsum"},
{"image":"pics/download.jpeg","topic":"react","header":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh sapien, molestie non hendrerit eget, interdum ac nibh. Nam pellentesque ante vitae finibus blandit. Vestibulum ante ipsum"}];

export const ProjectsBar = () => {
    return ( 
        <div className={styles.cardContainer}>
            {experienceData.map(function(d, idx){
                    return (<div className={styles.projectCard} key={idx}>
                            <img className={styles.cardImages} src={d.image} />
                            <p className={styles.topic}>{d.topic}</p>
                            <p className={styles.header}>{d.header}</p>
                            <p className={styles.text}>{d.text}</p>
                        </div>)
                })}
        </div>
     );
}

export default ProjectsBar ;