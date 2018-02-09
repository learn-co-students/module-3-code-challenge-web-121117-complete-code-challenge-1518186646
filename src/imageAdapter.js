class ImageAdapter {
  static getImage(){
    return fetch('https://randopic.herokuapp.com/images/7')
    .then(res => res.json())
  }

  static getComments(){
    return fetch('https://randopic.herokuapp.com/images/7')
    .then(res => res.json())
  }

  static createComment(comment){
    return fetch('https://randopic.herokuapp.com/comments',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "id": comment.id,
        "content": comment
      })
    }).then(res => res.json())
  }

  static addLikes(){
    return fetch('https://randopic.herokuapp.com/likes/',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({

      })
    }).then(res => res.json())
  }
}
