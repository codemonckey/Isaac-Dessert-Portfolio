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
                        <div className={styles}></div>
                        <ParagraphBlurb text ={experienceData.text} header = {experienceData.header}/>
                    </div>
                    <div className={styles.quarterPanel}>
                    </div>
                    <div className={styles.odds}>
                        <Projects/>
                    </div>
                    <div className={styles.evens}>
                        <ExperienceBar/>
                    </div>
                    <div className={styles.odds}>

                    </div>
                </div>
            <Footer/>
        </div>
    )
}
  
export default about
  