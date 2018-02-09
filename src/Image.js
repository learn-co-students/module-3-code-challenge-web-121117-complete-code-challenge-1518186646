class Image {
  constructor({ id, url, name, like_count, comments }) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.like_count = like_count;
    this.comments = comments;
  }

  static getImage() {
    ImageAdapter.getImage().then(json => {
      let newImage = new Image(json);
      newImage.render();
    });
  }

  render() {
    let imageDiv = document.getElementById("image");
    let likes = document.getElementById("likes");
    let title = document.getElementById("image_title");
    likes.innerText = this.like_count;
    imageDiv.src = this.url;
    title.innerText = this.name;
    this.comments.forEach(json => {
      let comment = new Comment(json);
      comment.render();
    });
  }
}
