import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Photowall = (props) => {
  return <div>
    <Link className="addIcon" to="/AddPhoto"></Link>
    <div className="photoGrid">
      {props.posts
        .sort((x,y) => {
          return y.id - x.id
        })
        .map((post, index) => <Photo post={post} key={post.id} {...props} index={index} />)}
    </div>
  </div>
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Photowall
