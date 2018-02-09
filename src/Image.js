class Image {
  constructor({url, name, like_count, comments}){
    this.url = url
    this.name = name
    this.like_count = like_count
    this.comments = comments
  }

  render(){
    let img = document.getElementById('image')
    let likes = document.getElementById('likes')
    let h4 = document.getElementById('name')
    let likeBtn = document.getElementById('like_button')
    likes.innerHTML = this.like_count
    img.src = this.url
    h4.innerHTML = this.name
  }
}
