import React, {Component} from 'react';

import './Comment.css';

class Comment extends Component {

  handleDelete = () => {};  

  render() {
    return (
      <div className="Comment">
        <p>
          {this.props.text} 
          <span className="delete" onClick={() => (this.props.onDelete(this.props.id))}>
            X
          </span>
        </p>
      </div>
    );
  }
} //Comment

export default Comment;
