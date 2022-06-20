import React from 'react';
import styles from '../styles/ProjectBar.module.css'

const experienceData =[{"image":"pics/download.jpeg","topic":"react","header":"hello","text":"this is about..."}];

export const ProjectsBar = () => {
    return ( 
        <div>
            {experienceData.map(function(d, idx){
                    return (<div className={styles.projectCard} key={d.key}>
                            <img className={styles.cardImages} src={d.image} />
                            <p className={styles.topic}>{d.topic}</p>
                            <p className={styles.header}>{d.header}</p>
                            <p>{d.text}</p>
                        </div>)
                })}
        </div>
     );
}

export default ProjectsBar ;