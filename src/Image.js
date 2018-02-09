const Image = (function () {
  return class Image {
    constructor ({url, name, like_count, comments}) {
      this.url = url
      this.name = name
      this.like_count = like_count
      this.comments = comments
    }

    render() {
      const imageTag = document.getElementById('image')
      imageTag.setAttribute('src', this.url)
      const likesTag = document.getElementById('likes')
      likesTag.innerText = this.like_count
    }
  }
})();

