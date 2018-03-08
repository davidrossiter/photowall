//remove action

export const removePost = (index) => {
  return {
    type: "REMOVE_POST",
    //index: index
    index: index
  }
}

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    //post: post
    post
  }
}

//add post action
