import React, { useState } from 'react';
import styles from '../styles/Panels.module.css'
import bars from '../styles/Bars.module.css'

const experienceData =[{"image":"icons/Kotlin_Icon.svg.png","color":"red","width":"80"},
            {"image":"icons/Kotlin_Icon.svg.png","color":"blue","width":"70"},
            {"image":"icons/Kotlin_Icon.svg.png","color":"green","width":"60"},
            {"image":"icons/Kotlin_Icon.svg.png","color":"teal","width":"54"}
    ];


    export const ExperienceBar = () => {
        return (
            <div className={bars.flexContainer}>
                {experienceData.map(function(d, idx){
                    const [animated, setAnimated] = useState(false);
                    
                    return (<div className={styles.skillSet} key={idx}>
                        <div
                            onMouseEnter={() => setAnimated(() => true)}
                            onAnimationEnd={() => setAnimated(() => false)}>
                            <img
                            style={{height: "3em", width: "3em"}}
                            className={animated ? bars.imageSkills : bars.imageSkillsNoAnimation}
                            src={d.image} />
                         </div>
                        <div className={bars.bar} style={{background: d.color, "--width-var": d.width + '%'}}>
                                <div className={bars.barText}>
                                    {d.width}%
                                </div>
                            </div>
                        </div>)
                })}
            </div>
    );
    };

export default ExperienceBar;