import React, {Component} from 'react';
import Photo from './Photo';

class Photowall extends Component {
  render(){
    return <div className="photoGrid">
      {this.props.posts.map((post, index) => <Photo post={post} key={index} onRemovePhoto={this.props.onRemovePhoto} />)}
    </div>
  }
}

export default Photowall
