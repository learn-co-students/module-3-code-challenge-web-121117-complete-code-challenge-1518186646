class App {
  static init(){
    console.log("The Page has been loaded")
    App.getImage()
    App.getAllComments()

    let commentForm = document.getElementById('comment_form')
    let likeButton = document.getElementById('like_button')
    commentForm.addEventListener('submit', App.handleSubmit)

    likeButton.addEventListener('click', App.handleLikes)
  }

  static getImage(){
    ImageAdapter.getImage()
    .then(json => {
      let newImage = new Image(json)
      newImage.render()
    })
  }

  static getAllComments(){
    let ul = document.getElementById('comments')
    ImageAdapter.getComments()
    .then(json => {
      json['comments'].forEach(comment => {
        let newComment = new Comment(comment)
        ul.append(newComment.render())
      })
    })
  }

  static handleSubmit(event){
    event.preventDefault()
    let ul = document.getElementById('comments')
    let comment = document.getElementById('comment_input').value

    ImageAdapter.createComment(comment)
    .then(json => {
      console.log(json)
      let newComment = new Comment(json)
      ul.append(newComment.render())
    })
  }

  static handleLikes(){
    let numLikes = document.getElementById('likes')
    console.log(numLikes)
  }
}
