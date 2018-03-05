import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

class Photowall extends Component {
  render(){
    return <div className="photoGrid">
      {this.props.posts.map((post, index) => <Photo post={post} key={index} onRemovePhoto={this.props.onRemovePhoto} />)}
    </div>
  }
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall
