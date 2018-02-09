const imageId = 3
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
    listComment.id = `comment-${comment.id}`
    listComment.innerHTML = `
    ${comment.content}
    <small>
    <button data-id='${comment.id}' onclick='deleteComment(this)'>Delete</button>
    </small>`
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

  //I was told I could make the comment posting pessemistic for the bonus, as long as everything still worked.

  postComment(newComment).then(json => {
    listComment.id = `comment-${json.id}`
    listComment.innerHTML = `${json.content}
    <small>
    <button data-id='${json.id}'onclick='deleteComment(this)'>Delete</button>
    </small>`
    comments.append(listComment)
  })
  document.getElementById('comment_input').value = ''
}

function postComment(comment){
  return fetch('https://randopic.herokuapp.com/comments/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({image_id: imageId, content: comment})
  }).then(res => res.json())
}

function deleteComment(comment){
  commentId = comment.dataset.id
  return fetch(`https://randopic.herokuapp.com/comments/${commentId}`, {
    method: 'DELETE'
  }).then(res => res.json()).then(json => {
    alert(json.message)
    document.getElementById(`comment-${commentId}`).remove()
  })
}
