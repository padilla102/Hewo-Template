import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { SidebarWrapper } from "../sidebar-wrapper";

import { Topbar } from "../topbar";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Widget } from "../widget";
import { Footer } from "../footer";
import { GotoTop } from "../goto-top";

import { 
    Home, 
    HomeBoxed, 
    HomeCarausel, 
    HomeGrid, 
    HomeRTL,
    HomeSlide
} from "../home";

import { SpinnerCover } from "../spinner-cover";
import "./App.css"

const data = [
    {
        name:'Home',
        to: '/',
        subMenu: [
            { name: 'Default', to: '/'},
            { name: 'Grid', to: '/home-grid' },
            { name: 'Big slide', to: '/home-slide' },
            { name: 'Carausel', to: '/home-carausel' },
            { name: 'Boxed layout', to: '/home-boxed' },
            { name: 'RTL layout', to: '/home-rtl' }
        ]
    },
    {
        name:'Layout',
        to: '/',
        subMenu: [
            { name: 'Category', to: '/', subMenu: [
                { name: 'List', to: '/' },
                { name: 'Grid', to: '/' },
                { name: 'Masonry', to: '/' },
                { name: 'Big', to: '/' }
            ]},
            { name: 'Posts', to: '/', subMenu: [
                { name: 'Default', to: '/' },
                { name: 'Video', to: '/' },
                { name: 'Audio', to: '/' },
                { name: 'Gallery', to: '/' },
                { name: 'Image', to: '/' }
            ] },
            { name: 'Pages', to: '/', subMenu: [
                { name: 'Author', to: '/' },
                { name: 'Search', to: '/' },
                { name: '404', to: '/' },
                { name: 'Contact', to: '/' },
                { name: 'Typography', to: '/' }
            ]  }
        ]
    }, 
    {
        name:'News',
        to: '/'
    }, 
    {
        name:'Economy',
        to: '/',
        subMenu: []
    }, 
    {
        name:'Entertainment',
        to: '/',
        subMenu: [
            { name: 'Festival', to: '/'},
            { name: 'Music', to: '/' },
            { name: 'Movie', to: '/' },
            { name: 'Cinema', to: '/' }
        ]
    }, 
    {
        name:'Jobs',
        to: '/'
    }      
];


export class App extends Component {
    state = {
        toggled:false
    }

    ShowSidebarWrapper = () => {
        this.setState({toggled: !this.state.toggled})
    }
    
    render() {
        return (
            <Router>
                <SpinnerCover />
                <div id="wrapper" class={this.state.toggled? 'toggled': null}>
                    <SidebarWrapper/>
                    <div id="page-content-wrapper">
                        
                        <Topbar showSideBar = {this.ShowSidebarWrapper} />
                        <Logo />
                        <Navigation data={data}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home-grid" exact component={HomeGrid}/>
                        <Route path="/home-slide" exact component={HomeSlide}/>
                        <Route path="/home-carausel" exact component={HomeCarausel}/>
                        <Route path="/home-boxed" exact component={HomeBoxed}/>
                        <Route path="/home-rtl" exact component={HomeRTL}/>
                        <Widget />
                        <Footer />  
                        <GotoTop />                  
                    </div> 
                </div>
            </Router>
            
        )
    }
}

export default App
