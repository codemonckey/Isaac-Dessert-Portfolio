import styles from '../styles/Panels.module.css'
import Navbar from "../components/NavigationBar"
import Footer from "../components/Footer"
import ExperienceBar from "../components/ExperienceBar"
import Projects from "../components/ProjectsBar"

function about() {
    return (
        <div className={styles.pageContainer}>
            <Navbar/>
                <div className={styles.container}>
                    <div className={styles.odds}>
                        <ExperienceBar/>
                    </div>
                    <div className={styles.evens}>
                        <Projects/>
                    </div>
                    <div className={styles.odds}>

                    </div>
                </div>
            <Footer/>
        </div>
    )
}
  
export default about
  