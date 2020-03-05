import React, { Component } from 'react';
import './search-form.css';

export class SearchForm extends Component {
    render() {
        return (
            <form action="#" class="search-form" method="get" role="search"> 
                <label> 
                    <input type="text" name="s"  placeholder="Search …" class="search-field"/> 
                </label> 
                    <input type="submit" value="Search" class="search-submit"/>
            </form>
        )
    }
}

export default SearchForm
