class Comment {
  constructor(id, content){
    this.id = id
    this.content = content
  }

  render(){
    let newComment = document.createElement('li')
    newComment.id = `comment-${this.id}`
    newComment.innerText = this.content
    document.getElementById('comments').appendChild(newComment)
  }
}
