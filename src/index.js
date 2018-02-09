document.addEventListener('DOMContentLoaded', function() {
  const imageId = 14 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL)
  .then(res => res.json())
  .then(data => {
    const img = new Image(data.id, data.url, data.name, data.like_count, data.comments)
    img.render()
    wireUpCommentForm()
  })

  function wireUpCommentForm() {
    document.getElementById('comment_form').addEventListener('submit', function(e){
    e.preventDefault()
    let newComment = document.createElement('li')
    let newCommentContent = e.target[0].value
    newComment.innerText = newCommentContent
    document.getElementById('comments').appendChild(newComment)

    fetch('https://randopic.herokuapp.com/comments', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: 14,
        content: newCommentContent
      })
    })
    .then(res => res.json())
    .then(json => {
      let deleteCommentClickyThingy = document.createElement('a')
      deleteCommentClickyThingy.href = '#'
      deleteCommentClickyThingy.innerText = 'DESTROYDESTROYDESTROY'
      deleteCommentClickyThingy.id = `delete-${json.id}`
      deleteCommentClickyThingy.addEventListener('click', () => {
        fetch('https://randopic.herokuapp.com/comments/${json.id}', {
          method: 'DELETE'
        })
        .then((json) => {
          document.getElementById('comments').removeChild(newComment)

          let deleteMessage = document.createElement('em')
          deleteMessage.innerText = "Successfully Deleted Your Comment, Homie!"
          document.getElementById('comments').appendChild(deleteMessage)
        })
      })
      newComment.appendChild(deleteCommentClickyThingy)
    })

    document.getElementById('comment_input').value = ""
  })
  }

})
