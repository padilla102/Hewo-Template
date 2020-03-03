import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Topbar } from "../topbar";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Footer } from "../footer";
import { GotoTop } from "../goto-top";
import { Home } from "../home";
import { HomeGrid } from "../home-grid";
import { HomeSlide } from "../home-slide";
import { HomeCarausel } from "../home-carausel";
import { HomeBoxed } from "../home-boxed";
import { HomeRTL } from "../home-rtl";

import { SpinnerCover } from "../spinner-cover";
import "./App.css"

const data = [
    {
        name:'Home',
        to: '#',
        subMenu: [
            { name: 'Default', to: '#'},
            { name: 'Grid', to: '/home-grid' },
            { name: 'Big slide', to: '/home-slide' },
            { name: 'Carausel', to: '/home-carausel' },
            { name: 'Boxed layout', to: '/home-boxed' },
            { name: 'RTL layout', to: '/home-rtl' }
        ]
    },
    {
        name:'Layout',
        to: '#',
        subMenu: [
            { name: 'Category', to: '#', subMenu: [
                { name: 'List', to: '#' },
                { name: 'Grid', to: '#' },
                { name: 'Masonry', to: '#' },
                { name: 'Big', to: '#' }
            ]},
            { name: 'Posts', to: '#', subMenu: [
                { name: 'Default', to: '#' },
                { name: 'Video', to: '#' },
                { name: 'Audio', to: '#' },
                { name: 'Gallery', to: '#' },
                { name: 'Image', to: '#' }
            ] },
            { name: 'Pages', to: '#', subMenu: [
                { name: 'Author', to: '#' },
                { name: 'Search', to: '#' },
                { name: '404', to: '#' },
                { name: 'Contact', to: '#' },
                { name: 'Typography', to: '#' }
            ]  }
        ]
    }, 
    {
        name:'News',
        to: '#'
    }, 
    {
        name:'Economy',
        to: '#',
        subMenu: []
    }, 
    {
        name:'Entertainment',
        to: '#',
        subMenu: [
            { name: 'Festival', to: '#'},
            { name: 'Music', to: '#' },
            { name: 'Movie', to: '#' },
            { name: 'Cinema', to: '#' }
        ]
    }, 
    {
        name:'Jobs',
        to: '#'
    }      
];


export class App extends Component {
    
    render() {
        return (
            <Router>
                <SpinnerCover />
                <div id="page-content-wrapper">
                    
                    <Topbar />
                    <Logo />
                    <Navigation data={data}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home-grid" exact component={HomeGrid}/>
                    <Route path="/home-slide" exact component={HomeSlide}/>
                    <Route path="/home-carausel" exact component={HomeCarausel}/>
                    <Route path="/home-boxed" exact component={HomeBoxed}/>
                    <Route path="/home-rtl" exact component={HomeRTL}/>
                    <Footer />  
                    <GotoTop />                  
                </div> 
            </Router>
            
        )
    }
}

export default App
