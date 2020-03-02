import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Transition, animated } from "react-spring/renderprops";
import "./navigation.css"

const menu = [
    {
        name:'Home',
        to: '#'
        // subMenu: [
        //     { name: 'Default', to: '#'},
        //     { name: 'Grid', to: '#', subMenu: [] },
        //     { name: 'Big slide', to: '#', subMenu: []  },
        //     { name: 'Carausel', to: '#', subMenu: [] },
        //     { name: 'Boxed layout', to: '#', subMenu: []  },
        //     { name: 'RTL layout', to: '#', subMenu: []  }
        // ]
    },
    {
        name:'Layout',
        to: '#',
        subMenu: [
            { name: 'Category', to: '#', subMenu: [
                { name: 'List', to: '#', subMenu: []},
                { name: 'Grid', to: '#', subMenu: [] },
                { name: 'Masonry', to: '#', subMenu: [] },
                { name: 'Big', to: '#', subMenu: []  }
            ]},
            { name: 'Posts', to: '#', subMenu: [
                { name: 'Default', to: '#', subMenu: []},
                { name: 'Video', to: '#', subMenu: [] },
                { name: 'Audio', to: '#', subMenu: [] },
                { name: 'Gallery', to: '#', subMenu: []  },
                { name: 'Image', to: '#', subMenu: []  }
            ] },
            { name: 'Pages', to: '#', subMenu: [
                { name: 'Author', to: '#', subMenu: []},
                { name: 'Search', to: '#', subMenu: [] },
                { name: '404', to: '#', subMenu: [] },
                { name: 'Contact', to: '#', subMenu: []  },
                { name: 'Typography', to: '#', subMenu: []  }
            ]  }
        ]
    }, 
    {
        name:'News',
        to: '#',
        subMenu: []
    }, 
    {
        name:'Economy',
        to: '#',
        subMenu: []
    }, 
    {
        name:'Entertainment',
        to: '#',
        subMenu: []
    }, 
    {
        name:'Jobs',
        to: '#',
        subMenu: []
    }      
];

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
        console.log(items)
        if (items.length > 0 ){
            return (
                <ul id="main-menu">
                    {items.map((item) => {
                        return ((item.subMenu) ?
                        <li class={item.subMenu.length > 0 ? "menu-item-has-children": ""}>
                            <Link to={item.to}>{item.name}</Link>
                                {this.renderList(item.subMenu)}
                        </li> 
                        :
                        <li >
                            <Link to={item.to}>{item.name}</Link>
                        </li>
                    )})}
                </ul>
            )
        }
        
    }

    renderList = items => {
        console.log("list", items)
        if (items.length > 0 ) {
            return (
                <ul class="sub-menu fadeInMenu animated">
                    {items.map((item) => { 
                        return ( (item.subMenu) ? 
                        <li class={item.subMenu.length > 0 ? "menu-item-has-children": ""}>
                            <Link to={item.to}>{item.name}</Link>
                            {this.renderList(item.subMenu)}
                        </li> :
                        <li >
                            <Link to={item.to}>{item.name}</Link>
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
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12 main_nav_cover" id="nav">
                                {this.renderMainMenu(menu)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation