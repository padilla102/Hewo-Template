import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider-small-alice.css';

const data = [
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '1 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '2 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '3 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '4 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '5 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '6 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '7 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '8 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '9 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: '10 Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90}
]

export class SliderSmallAlice extends Component {
    state = {
        responsive: { 1024: { items: 4 } },
        stagePadding: {
            paddingLeft : 0 ,  
            paddingRight : 0 
        }
    }
    render() {
        const { responsive, stagePadding } = this.state

        return (
            
            <AliceCarousel 
                buttonsDisabled={true}
                dotsDisabled={true}
                touchTrackingEnabled={true} 
                mouseTrackingEnabled={true}
                responsive = {responsive}
                stagePadding= {stagePadding}
                infinite={true}
                className ="carausel_slider section_margin" 
                id="slider-small"
            >
            {
                data.map((item, index) => {
                    return(
                        <div 
                            class="item"
                            key={index} 
                        >
                            <figure class="alith_post_thumb">
                                <a href={item.link}>
                                <img src={item.img} alt=""/></a>
                            </figure>
                            <div class="alith_post_title_small">
                                <a href={item.link}>
                                    <strong>{item.title}</strong>
                                </a>
                                <p class="meta">
                                    <span>{item.date}</span> 
                                    <span>{item.views} views</span>
                                </p>
                            </div>
                        </div>
        
                    )
                })
            }
            </AliceCarousel>
        )
    }
}

export default SliderSmallAlice