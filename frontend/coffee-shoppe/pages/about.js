import styles from '../styles/Panels.module.css'
import Navbar from "../components/NavigationBar"
import Footer from "../components/Footer"
import ExperienceBar from "../components/ExperienceBar"
import Projects from "../components/ProjectsBar"
import ParagraphBlurb from "../components/ParagraphBlurb"

function about() {
    const experienceData ={"header":"Isaac Dessert","text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh sapien, molestie non hendrerit eget, interdum ac nibh. Nam pellentesque ante vitae finibus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus varius, nisl in blandit finibus, odio quam malesuada orci, "}
    return (
        <div className={styles.pageContainer}>
            <Navbar/>
                <div className={styles.container}>

                    <div className={styles.threeFourthPanel}>
                        <ParagraphBlurb text ={experienceData.text} header = {experienceData.header} color = "#dddddd"/>
                    </div>
                    <div className={styles.quarterPanel}>
                        <ParagraphBlurb text ={experienceData.text} header = {experienceData.header} color = "#192841" />
                    </div>
                    <div className={styles.odds}>
                        <p className={styles.section}>Projects</p>
                        <Projects/>
                    </div>
                    <div className={styles.evens}>
                        <p className={styles.whiteSection}>Skills and Experience</p>
                        <ExperienceBar/>
                    </div>
                    <div className={styles.odds}>
                        <p className={styles.section}>Work Experience</p>
                        <Projects/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
  
export default about
  