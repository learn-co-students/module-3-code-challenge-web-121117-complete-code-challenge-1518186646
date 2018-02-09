class Comment {
  static addComment(){
    const form = document.getElementById('comment_form')
    form.addEventListener('submit',function(e){
      e.preventDefault()
      let commentInput = document.getElementById('comment_input')
      let commentContent = commentInput.value
      let commentList = document.getElementById('comments')
      let commentLi = document.createElement('li')
      commentLi.innerHTML = commentContent
      commentList.appendChild(commentLi)
      commentInput.value = ''
      Comment.persistComment(commentContent)
    })
  }
  static persistComment(comment){
    return fetch('https://randopic.herokuapp.com/comments',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: 9,
        content: `${comment}`
      })
    }).then(res => res.json())
      .then(json => console.log(json))
  }
}
