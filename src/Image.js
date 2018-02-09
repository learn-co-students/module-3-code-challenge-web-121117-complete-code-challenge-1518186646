const Image = (function() {
  return class Image {
    constructor(res) {
      this.id = res["id"]
      this.like_count = res["like_count"]
      this.name = res["name"]
      this.url = res["url"]
      this.comments = res["comments"]
    }

    render(){
      let div = document.createElement('div')
      let img = document.createElement('img')
      let h4 = document.createElement('h4')
      let span = document.createElement('span')
      let span2 = document.createElement('span')
      let likeButton = document.createElement('button')
      let form = document.createElement('form')
      let inputComment = document.createElement('input')
      let submitComment = document.createElement('input')
      let ulComments = document.createElement('ul')
      div.setAttribute("id", "image_card")
      div.setAttribute("class", "card col-md-4")
      img.setAttribute("data-id", this.id)
      img.setAttribute("src", this.url)
      h4.innerHTML = this.name
      span.innerHTML = "Likes: "
      span2.innerHTML = this.like_count
      span2.setAttribute("id", `${this.id} Likes`)
      likeButton.innerHTML = "Like"
      likeButton.setAttribute("onclick", `App.addLike(${this.id})`)
      submitComment.setAttribute("onclick", `App.submitComment(event, ${this.id})`)
      inputComment.setAttribute("id", "comment_input")
      inputComment.setAttribute("type", "text")
      inputComment.setAttribute("name", "comment")
      inputComment.setAttribute("placeholder", "Add Comment")
      submitComment.setAttribute("type", "submit")
      submitComment.setAttribute("value", "Submit")
      ulComments.setAttribute("id", "comments")
      this.comments.forEach(comment => {
        let li = document.createElement('li')
        li.setAttribute("id", comment.id)
        li.innerHTML = comment.content
        ulComments.append(li)
      })
      div.append(img)
      div.append(h4)
      div.append(span)
      span.append(span2)
      div.append(likeButton)
      form.append(inputComment)
      form.append(submitComment)
      div.append(form)
      div.append(ulComments)
      return div
    }

  }
})();
