import React, {Component} from 'react';

import './Comment.css';

class Comment extends Component {

  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
  };

  render() {
    return (
      <div className="Comment">
        <p>
          {this.props.text} 
          <span className="delete" onClick={this.handleDelete}>
            X
          </span>
        </p>
      </div>
    );
  }
} //Comment

export default Comment;
