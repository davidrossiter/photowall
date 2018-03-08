import React, {Component} from 'react'
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render(){
    const {match, posts } = this.props
    /*Make sure is a Number using Number() so you can do a check on the same type below.*/
    const id = Number(match.params.id)
    const post = posts.find((post) => post.id === id)
    console.log(post)
    return (<div className="single-photo">

      <Photo post={post}/>
      <Comments />

      </div>
    )
  }
}

export default Single
