import React, { Component } from 'react';
import { Carousel } from "../carousel";
import './slider-small.css';

const data = [
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
    {link: 'single.html', img: 'http://via.placeholder.com/100x100', title: 'Lorem ipsum dui sollic itudin', date: '2 Sep, 2018', views: 90},
]

export class SliderSmall extends Component {
    
    render() {
        const setting = {
            dragSpeed: 1.25,
            itemWidth: 277,
            itemHeight: 180,
            itemSideOffsets: 10,
          }
      
          const itemStyle = {
            width: `${setting.itemWidth}px`,
            height: `${setting.itemHeight}px`,
            margin: `0px ${setting.itemSideOffsets}px`
          }
        
        return(
            <Carousel _data={data} {...setting}>
            {
                data.map((item, index) => {
                    return(
                        <div 
                            class="item"
                            key={index} 
                            style={{ ...itemStyle }}>
                            <figure class="alith_post_thumb">
                                <a href={item.link}>
                                <img src={item.title} alt=""/></a>
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
                
            </Carousel>
        )
    }
}

export default SliderSmall
