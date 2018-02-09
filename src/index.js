document.addEventListener('DOMContentLoaded', function() {
  const imageId = 8 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  ImageApi.fetchImage(imageURL)
  .then(json => {
    let image = new Image(json)
    console.log(image)
    image.render()

  })

  const likeButton = document.getElementById('like_button')
  likeButton.addEventListener('click', function (event) {
    let likesCount = document.getElementById('likes')
    likesCount.innerHTML = parseInt(likesCount.innerHTML) + 1
    console.log(likesCount)
    ImageApi.createLike(likeURL)
  })

  const form = document.getElementById('comment_form')
  const commentsList = document.getElementById('comments')
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const commentTextField = document.getElementById('comment_input')
    const commentLi = document.createElement('li')
    commentLi.innerText = commentTextField.value
    commentsList.appendChild(commentLi)
    CommentApi.createComment(commentsURL, commentLi.innerText)
    commentTextField.value = ''
  })
})
