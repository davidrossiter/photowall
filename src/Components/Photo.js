import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Photo = (props) => {
  const post = props.post;
  return <figure className="figure">
    <Link to={`/single/${post.id}`}>
      <img src={post.imageLink} alt={post.description} className="photo" />
    </Link>
    <figcaption>
      <p>{post.description}</p>
    </figcaption>
    <div className="button-container">
      <button className="remove-button" onClick={ () => {
          props.removePost(props.index)
          props.history.push("/")
        } }>Remove</button>
      <Link to={`/single/${post.id}`} className="button">
        <div className="comment-count">
          <div className="speech-bubble"></div>
          {/* if comments are present write length else 0 */}
          {props.comments[post.id] ? props.comments[post.id].length : 0}
        </div>
      </Link>
    </div>
  </figure>
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Photo
