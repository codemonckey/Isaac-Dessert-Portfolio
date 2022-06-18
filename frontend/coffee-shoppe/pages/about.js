import styles from '../styles/Panels.module.css'
import bars from '../styles/Bars.module.css'
import Navbar from "../components/NavigationBar"
import Footer from "../components/Footer"

function about() {
    return (
        <div className={styles.pageContainer}>
            <Navbar/>
                <div className={styles.container}>
                    <div className={styles.odds}>
                        <div className={styles.skillSet}>
                                <div className={bars.imageSkills}/>
                                <div className={bars.header}>
                                    <hr className={bars.left}/>Experience<hr className={bars.right}/>
                                </div>
                        </div>
                        <div className={styles.skillSet}>
                            <img className={bars.imageSkills} src="icons/Kotlin_Icon.svg.png" />
                            <div className={bars.bar} style={{background: 'red', "--width-var": '80%'}}></div>
                        </div>
                        <div className={bars.bar} style={{background: 'blue', "--width-var": '89%'}}></div>
                        <div className={bars.bar} style={{background: 'green', "--width-var": '72%'}}></div>
                        <div className={bars.bar} style={{background: 'yellow', "--width-var": '68%'}}></div>
                        <div className={bars.bar} style={{background: 'teal', "--width-var": '59%'}}></div>
                    </div>
                    <div className={styles.evens}>
                    </div>
                    <div className={styles.odds}>

                    </div>
                </div>
            <Footer/>
        </div>
    )
}
  
export default about
  