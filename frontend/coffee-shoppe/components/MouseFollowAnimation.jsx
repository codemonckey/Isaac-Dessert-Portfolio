import React, { Component } from 'react';
import styles from "../styles/Animation.module.css"

class MouseFollowAnimation extends Component {

    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX, top: e.pageY});
        });
    }
    render() {
        return (
            <div style={{left: this.state.left, top: this.state.top}} className={styles.follower}></div>
        )
    }
}


export default MouseFollowAnimation;