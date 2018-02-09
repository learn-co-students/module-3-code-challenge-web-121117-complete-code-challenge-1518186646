class Image {
  static init() {
    Image.postImage();
    let likeButton = document.getElementById("like_button");
    likeButton.addEventListener("click", Image.addLike);
  }

  static postImage() {
    let picture = document.getElementById("image");
    let name = document.getElementById("name");
    ImageAdapter.getImage(2).then(json => {
      picture.src = json.url;
      name.innerHTML = json.name;
      let likes = document.getElementById("likes");
      likes = json.like_count;
    });
  }
  static addLike() {
    let likes = document.getElementById("likes");
    likes.innerHTML = parseInt(likes.innerHTML) + 1;
    ImageAdapter.addLike(2, likes);
  }
}
