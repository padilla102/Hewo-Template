import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { SidebarWrapper } from "../sidebar-wrapper";

import { Topbar } from "../topbar";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Widget } from "../widget";
import { Footer } from "../footer";
import { GotoTop } from "../goto-top";

import * as page from "../pages";

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
        toggled:false,
        showLoading: true
    }

    componentDidMount(){
        // setTimeout(() => {
            this.setState({
                showLoading:false
            });
        //   }, 500)
    }

    ShowSidebarWrapper = () => {
        this.setState({toggled: !this.state.toggled})
    }
    
    render() {
        return (
            <Router>
                <SpinnerCover show = {this.state.showLoading}/>
                <SpinnerCover show = {this.state.showLoading}/>
                <div id="wrapper" class={this.state.toggled? 'toggled': null}>
                    <SidebarWrapper/>
                    <div id="page-content-wrapper">
                        
                        <Topbar showSideBar = {this.ShowSidebarWrapper} />
                        <Logo />
                        <Navigation data={data}/>
                        <Route path="/" exact component={page.Home}/>
                        <Route path="/home-grid" exact component={page.HomeGrid}/>
                        <Route path="/home-slide" exact component={page.HomeSlide}/>
                        <Route path="/home-carausel" exact component={page.HomeCarausel}/>
                        <Route path="/home-boxed" exact component={page.HomeBoxed}/>
                        <Route path="/home-rtl" exact component={page.HomeRTL}/>
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
