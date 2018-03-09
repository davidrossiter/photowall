import {database} from '../database/config';

export const startAddingPost = (post) => {
  return (dispatch) =>  {
    return database.ref("posts").update({[post.id]: post})
    .then(() => {
      dispatch(addPost(post))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export const startLoadingPosts = () => {
  return (dispatch) => {
    return database.ref("posts").once("value")
    .then((snapshot) => {
      let posts = []
      snapshot.forEach((childSnapshot) => {
        posts.push(childSnapshot.val())
      })
      dispatch(loadPosts(posts))
    })
  }
}

//remove action

export const removePost = (index) => {
  return {
    type: "REMOVE_POST",
    //index: index - is called payload
    index
  }
}

//add post action
export const addPost = (post) => {
  return {
    type: "ADD_POST",
    //post: post - is called payload
    post
  }
}

export const addComment = (comment, postId) => {
  return {
    type: "ADD_COMMENT",
    //comment: comment - called payload
    comment,
    postId
  }
}

export const loadPosts = (posts) => {
  return {
    type: "LOAD_POSTS",
    posts
  }
}
