import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"



export class Navigation extends Component {
    state = {
        scrolled: true
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            if (window.scrollY < 200) {
                this.setState({scrolled: true});
            }
            else{
                this.setState({scrolled: false});
            }
        })
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    renderMainMenu = items =>{
        if (items.length > 0 ){
            return (
                <ul id="main-menu">
                    {items.map((item, index) => {
                        return ((item.subMenu) ?
                        <li key={index} class={item.subMenu.length > 0 ? "menu-item-has-children": ""}>
                            <Link id={index} to={item.to}>{item.name}</Link>
                                {this.renderList(item.subMenu)}
                        </li> 
                        :
                        <li key={index}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    )})}
                </ul>
            )
        }
        
    }

    renderList = items => {
        if (items.length > 0 ) {
            return (
                <ul class="sub-menu fadeInMenu animated">
                    {items.map((item, index) => { 
                        return ( (item.subMenu) ? 
                        <li key={index} class={item.subMenu.length > 0 ? "menu-item-has-children": ""}>
                            <Link to={item.to}>{item.name}</Link>
                            {this.renderList(item.subMenu)}
                        </li> :
                        <li key={index}>
                            <Link id={index} to={item.to}>{item.name}</Link>
                        </li>
                    )
                })}
                </ul>
            )
        }
    }

    render() {

        return (
            <div class={this.state.scrolled ? 'main-nav section_margin' : 'main-nav section_margin smartnav'}>
                <div class="container-fluid">
                    <div class="container fadeIn animated-fast">
                        <div class="row">
                            <div class="col-12 col-md-12 main_nav_cover" id="nav">
                                {this.renderMainMenu(this.props.data)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation