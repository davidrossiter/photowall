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
