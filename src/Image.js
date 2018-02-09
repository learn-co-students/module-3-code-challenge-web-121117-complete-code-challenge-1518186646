class Image {

  static retrieveImage(){
    return fetch('https://randopic.herokuapp.com/images/9',{
      method: 'GET',
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(res => res.json())
  }
  static renderImageData(){
    Image.retrieveImage().then(json=>{
    let comments = json.comments
    let name = json.name
    let likes = json.like_count
    let url = json.url
    let container = document.getElementById('image-data')
    let nameLI = document.createElement('li')
    nameLI.innerHTML = `Image Name: ${name}`
    let likesLI = document.createElement('li')
    likesLI.innerHTML = `Image Likes: ${likes}`
    let urlLI = document.createElement('li')
    urlLI.innerHTML = `Image URL: ${url}`

    comments.forEach(function(comment){
      let commentContent = comment.content
      let commentP = document.createElement('p')
      commentP.innerHTML = commentContent
      container.appendChild(commentP)
    })

    container.appendChild(nameLI)
    container.appendChild(likesLI)
    container.appendChild(urlLI)
    container.appendChild(nameLI)

  })
  }

  static addLikes(){
    let likesButton = document.getElementById('like_button')
    likesButton.addEventListener("click",function(e){
      e.preventDefault()
      let likesDisplay = document.getElementById('likes')
      let likesCount = parseInt(likesDisplay.innerHTML)
      likesDisplay.innerHTML = likesCount+1
      Image.persistLikes()
    })
  }
  static persistLikes(){
    return fetch('https://randopic.herokuapp.com/likes/', {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
          image_id: 9
      })
      // JSON.stringify(likeCount)
    }).then(res => res.json())
      .then(json => console.log(json))
  }


}
