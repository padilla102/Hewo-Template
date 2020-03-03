import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight} from "react-icons/fa";
import './bottom-menu.css'

export class BottomMenu extends Component {
    renderBottomMenu = () => {
        if (this.props.bottomMenu && this.props.bottomMenu.length > 0) {
            return(
                <ul class="bottom_menu">
                    {
                        this.props.bottomMenu.map( (item, index) =>{
                            return (
                                <li key={index}>
                                    <Link to={item.link}>
                                    <i class="fa"><FaAngleRight/></i>
                                        &nbsp;&nbsp; {item.text}
                                    </Link>
                                </li>

                            )
                        })
                    }   
                </ul>              
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderBottomMenu()}
            </React.Fragment>
        )
    }
}

export default BottomMenu
