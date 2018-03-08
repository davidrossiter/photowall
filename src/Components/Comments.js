import React, {Component} from 'react';

class Comments extends Component {
  render() {
    return(<div className="comments">
      <form className="comment-form">
        <input type="text" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
    )
  }
}

export default Comments
