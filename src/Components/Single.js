import React, {Component} from 'react'
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render(){
    const {match, posts } = this.props
    /*Make sure is a Number using Number() so you can do a check on the same type below.*/
    const id = Number(match.params.id)
    const post = posts.find((post) => post.id === id)
    /* If no comments set to empty array, otheriwse we map over undefined and crsh */
    const comments = this.props.comments[id] || []
    const index = this.props.posts.findIndex((post) => post.id === id)
    return (<div className="single-photo">

      <Photo post={post} {...this.props} index={index} />
      <Comments addComment={this.props.addComment} comments={comments} id={id} />

      </div>
    )
  }
}

export default Single
