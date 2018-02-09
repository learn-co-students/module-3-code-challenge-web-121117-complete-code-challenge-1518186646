class Image {

  constructor(id, url, name, like_count, comments){
    this.id = id
    this.url = url
    this.name = name
    this.like_count = like_count
    this.comments = comments
  }

  render() {
    const commentsList = document.getElementById('comments')

    document.getElementById('image').src = this.url
    document.getElementById('name').innerText = this.name
    document.getElementById('likes').innerText = this.like_count

    this.comments.forEach(function(comment){
      let newComment = new Comment(comment.id, comment.content)
      newComment.render()
    })

    document.getElementById('like_button').addEventListener('click', () => {
      document.getElementById('likes').innerText++
      fetch('https://randopic.herokuapp.com/likes',{
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: this.id
        })
      })
    })

  }

}
