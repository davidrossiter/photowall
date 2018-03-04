import React, {Component} from 'react';

class Photowall extends Component {
  render(){
    return <div>
      {this.props.posts.map((post) => <Photo post={post}/>{

      })}
    </div>
  }
}

export default Photowall
