import React, {Component} from 'react';
import NewsPost from './NewsPost';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        news: [],
        newsInput: '', 
      };
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);  
  } //constructor

  handleChange(e) {
    console.log('handleChange event =', e.target.value);
    this.setState({newsInput: e.target.value});
  } //handleChange

  handleKeyDown() {

  } //handleKeyDown

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={this.handleChange} />
        <NewsPost />
      </div>
    );
  }
}

export default App;
