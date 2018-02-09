const App = (function() {
  return class App {
    static init() {
      console.log("I'm in App")
      App.getImage()
    }

    static getImage() {
      let imageContainer = document.getElementById('image_content')
      Adapter.renderImage()
      .then(res => {
        console.log(res)
        let newImage = new Image(res)
        imageContainer.append(newImage.render())
      })
    }

    static addLike(id) {
      event.preventDefault()
      let likes = document.getElementById(`${id} Likes`)
      let likeValue = parseInt(likes.innerHTML)
      let newlikes = likeValue + 1
      likes.innerHTML = newlikes
      // Adapter.updateLike(id)
      // .then(like => {
      /// WON'T GO THROUGH - NOT SURE WHY
    // })
    }

    static submitComment(id) {
      event.preventDefault();
      let comment = document.getElementById(`comment_input`)
      let commentValue = comment.value
      let ul = document.getElementById(`comments`)
      Adapter.addComment(id, commentValue)
      .then(res => {
        let newComment = new Comment(res)
        let li = document.createElement('li')
        li.innerHTML = commentValue
        ul.append(li)
        comment.value = " "

        //NOT PERSISTING - NOT SURE WHY
      })
    }
  }
})()
