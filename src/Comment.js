class Comment {

  addComment(e){
    e.preventDefault()

    let commentInput = document.querySelector('#comment_input').value
    console.log(commentInput);

    let commentContainer = document.querySelector('#comments')
    let comment = document.createElement('li')

    comment.innerText = commentInput
    commentContainer.append(comment)

  }

}
