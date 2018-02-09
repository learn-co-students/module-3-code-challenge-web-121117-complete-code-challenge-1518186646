const imageId = 3 //Enter your assigned imageId here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`

document.addEventListener('DOMContentLoaded', function() {
  fetchImage(imageURL)
  document.getElementById('like_button').addEventListener('click', addLike)
  document.getElementById('comment_form').addEventListener('submit', addComment)
})

function renderComments(json){
  let comments = document.getElementById('comments')
  for (comment of json){
    let listComment = document.createElement('li')
    listComment.id = comment.id
    listComment.innerHTML = comment.content
    comments.prepend(listComment)
  }
}

function fetchImage(url){
  fetch(url).then(res => res.json()).then(json => {
    let image = document.getElementById('image')
    let likes = document.getElementById('likes')
    document.getElementById('image_content').prepend(`Image name: ${json.name}`)
    image.src = json.url
    likes.innerHTML = json.like_count
    renderComments(json.comments)
  })
}

function addLike(e){
  likeNode = document.getElementById('likes')
  currLikes = parseInt(likeNode.textContent)
  likeNode.textContent = ++currLikes
  postLike()
}

function postLike(){
  fetch('https://randopic.herokuapp.com/likes/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({image_id: imageId})
  }).then(res => console.log(res))
}

function addComment(e){
  e.preventDefault()
  let newComment = document.getElementById('comment_input').value
  let comments = document.getElementById('comments')
  let listComment = document.createElement('li')
  listComment.innerHTML = newComment
  comments.append(listComment)
  postComment(newComment)
  document.getElementById('comment_input').value = ''
}

function postComment(comment){
  fetch('https://randopic.herokuapp.com/comments/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({image_id: imageId, content: comment})
  }).then(res => console.log(res))
}
