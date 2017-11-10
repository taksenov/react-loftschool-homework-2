import React, {Component} from 'react';
import Comment from './Comment';

import './NewsPost.css';

//Variables
let id = 0;
//Variables

//CommonFunctions
function getCommentId() {
  id += 1;
  return id;
}
//CommonFunctions

class NewsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: ''
    };
    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);  
    this.handleKeyDown = this.handleKeyDown.bind(this);      
    this.handleDelete = this.handleDelete.bind(this);      
  } //constructor

  handleChange(e) {
    this.setState({ commentInput: e.target.value });
  } //handleChange

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      const { comments, commentInput } = this.state;
      const newComment = { id: getCommentId(), text: commentInput };

      this.setState({ commentInput: '', comments: [...comments, newComment] });
    }
  } //handleKeyDown


  handleDelete(id) {
    this.setState(state => ({
      comments: state.comments.filter(
        comment => id !== comment.id)
    }));
  }; //handleDelete

  render() {
    return (
      <div className='news-post'>
        <p>{this.props.text}</p>
        {this.state.comments.map(comment => (
          <Comment 
            key={comment.id}
            id={comment.id}
            text={comment.text} 
            onDelete={this.handleDelete}
          />
        ))}
        <input 
          className='comment-input' 
          type='text' 
          placeholder='Add comment' 
          onChange={this.handleChange} 
          onKeyDown={this.handleKeyDown} 
          value={this.state.commentInput} 
        />
      </div>
    );
  }
} //NewsPost;

export default NewsPost;
