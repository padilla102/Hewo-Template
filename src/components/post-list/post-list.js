import React, { Component } from 'react';
import './post-list.css';

export class PostList extends Component {
    render() {
        return (
            <div class="post_list post_list_style_1">
                <div class="alith_heading">
                    <h2 class="alith_heading_patern_2">Recent Posts</h2>
                </div>
                {
                    this.props.articles.map(article => {
                        return(
                            <article class="row section_margin animate-box">
                                <div class="col-md-3 animate-box">							
                                    <figure class="alith_news_img">
                                        <a href={article.figureLink}>
                                            <img src={article.figureImgLink} alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div class="col-md-9 animate-box">
                                    <h3 class="alith_post_title">
                                        <a href="single.html">{article.postTitle}</a>
                                    </h3>
                                    <div class="post_meta">
                                        <a href="page-author.html" class="meta_author_avatar">
                                            <img src={article.imgAuthorAvatar} alt={article.altAuthorAvatar}/>
                                        </a>
                                        <span class="meta_author_name">
                                            <a href={article.linkAuthorName} class="author">{article.authorName}</a>
                                        </span>
                                        <span class="meta_categories">
                                            <a href={article.Linkcategories}>{article.nameCategories}</a>, <a href="archive.html">News</a>
                                        </span>
                                        <span class="meta_date">{article.date}</span>
                                    </div>
                                </div>
                            </article>
                        )

                    })
                }
            </div>
        )
    }
}

export default PostList
