import React, { Component } from 'react';
import { LatestStyle1 } from "../latest-style-1";
import { WidgetTitle } from "../widget-title";
import { SearchForm } from "../search-form";
import { LatestStyle2 } from "../latest-style-2";
import { AlithTags } from "../alith_tags";

const articles = [
    {title:'Ut enim ad minima veniam, quis nostrum', date:'2 Sep, 2018', views: 268, linktitle: 'single.html', figurelink:'single.html', imgsrc:'http://via.placeholder.com/200x175', imgalt: ''},
    {title:'Curae lacinia consec tetur varius', date:'2 Sep, 2018', views: 268, linktitle: 'single.html', figurelink:'single.html', imgsrc:'http://via.placeholder.com/200x175', imgalt: ''},
    {title:'Euismod lacus vulpu tate augue', date:'2 Sep, 2018', views: 268, linktitle: 'single.html', figurelink:'single.html', imgsrc:'http://via.placeholder.com/200x175', imgalt: ''},
    {title:'Quam mauris lorem erat est euismod', date:'2 Sep, 2018', views: 268, linktitle: 'single.html', figurelink:'single.html', imgsrc:'http://via.placeholder.com/200x175', imgalt: ''},
    {title:'Nec eget ince ptos aenean gravida', date:'2 Sep, 2018', views: 268, linktitle: 'single.html', figurelink:'single.html', imgsrc:'http://via.placeholder.com/200x175', imgalt: ''}
]

const latests = [
    {img: 'http://via.placeholder.com/200x175', latest: 'Magna aliqua ut enim ad minim veniam', postDate:'18 Sep, 2018'},
    {img: 'http://via.placeholder.com/200x175', latest: 'Magna aliqua ut enim ad minim veniam quis', postDate:'18 Sep, 2018'},
    {img: 'http://via.placeholder.com/200x175', latest: 'Magna aliqua ut enim ad minim veniam quis', postDate:'18 Sep, 2018'}
];

const tags = [
    {name:'Business', link:'/'},
    {name:'Technology', link:'/'},
    {name:'Sport', link:'/'},
    {name:'Art', link:'/'},
    {name:'Lifestyle', link:'/'},
    {name:'Three', link:'/'},
    {name:'Photography', link:'/'},
    {name:'Lifestyle', link:'/'},
    {name:'Art', link:'/'},
    {name:'Education', link:'/'},
    {name:'Social', link:'/'},
    {name:'Three', link:'/'}
]

export class SidebarRight extends Component {
    render() {
        return (
            <aside class="col-md-4 sidebar_right">
                <div class="sidebar-widget animate-box fadeInUp animated-fast">
                    <WidgetTitle title= 'Popular Articles' />
                    <LatestStyle1 articles={articles}/>
                </div>
                <div class="sidebar-widget animate-box fadeInUp animated-fast">
                    <WidgetTitle title= 'Search' />
                    <SearchForm />
                </div>
                <div class="sidebar-widget animate-box fadeInUp animated-fast">
                    <WidgetTitle title= 'Trending' />
                    <LatestStyle2 latests = {latests}/>
                </div>
                <div class="sidebar-widget animate-box fadeInUp animated-fast">
                    <WidgetTitle title= 'Tags cloud' />
                    <AlithTags tags={tags}/>
                </div>
            </aside>
        )
    }
}

export default SidebarRight
