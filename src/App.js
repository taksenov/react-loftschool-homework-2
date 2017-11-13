import React, { Component } from 'react';
import NewsPost from './NewsPost';

import './App.css';

//Variables
let id = 0;
//Variables

//CommonFunctions
function getNewsId() {
    id += 1;
    return id;
}
//CommonFunctions

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            newsInput: ''
        };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    } //constructor

    handleChange(e) {
        this.setState({ newsInput: e.target.value });
    } //handleChange

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            const { news, newsInput } = this.state;
            const newNews = { id: getNewsId(), text: newsInput };

            this.setState({ newsInput: '', news: [...news, newNews] });
        }
    } //handleKeyDown

    render() {
        return (
            <div className="App">
                <input
                    className="todo-input"
                    type="text"
                    placeholder="Add news"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.newsInput}
                />
                {this.state.news.map(newsPost => <NewsPost key={newsPost.id} text={newsPost.text} />)}
            </div>
        );
    }
} //App

export default App;
