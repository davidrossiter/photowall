import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photowall extends Component {
  render(){
    return <div>
      <Link className="addIcon" to="/AddPhoto"></Link>
      <div className="photoGrid">
        {this.props.posts.map((post, index) => <Photo post={post} key={index} onRemovePhoto={this.props.onRemovePhoto} />)}
      </div>
    </div>
  }
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall
