import React, { Component } from 'react';
import './goto-top.css';

export class GotoTop extends Component {

    state = {
        addClass: false
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                this.setState({ addClass: true })
            } else {
                this.setState({ addClass: false })
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        let gototopClass = ['gototop'];

        if(this.state.addClass) {
            gototopClass.push('active');
        }
        
        return (
            <div className={gototopClass.join(' ')}>
                <a href="#root" class="js-gotop"><span>Take Me Top</span></a>
            </div>
        )
    }
}

export default GotoTop