import React, {Component} from 'react';

class Comment extends Component {
  render() {
    return <div className="Comment">
        <p>{this.props.text}</p>
        <span>X</span>
      </div>;
  }
} //Comment

export default Comment;
