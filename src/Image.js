class Image {
  static init() {
    Image.postImage();
    let likeButton = document.getElementById("like_button");
    likeButton.addEventListener("click", Image.addLike);
  }

  static postImage() {
    ImageAdapter.getImage(2).then(json => {
      let image = document.getElementById("image");
      image.src = json.url;

      let name = document.getElementById("name");
      name.innerHTML = json.name;

      let likes = document.getElementById("likes");
      likes.innerHTML = json.like_count;

      let comments = document.getElementById("comments");
      json.comments.forEach(comment => {
        let li = document.createElement("li");
        li.innerText = comment.content;
        let button = document.createElement("button");
        button.innerHTML = "Delete";
        li.append(button);
        li.id = comment.id;

        comments.append(li);
      });
    });
  }

  static addLike() {
    let likes = document.getElementById("likes");
    likes.innerHTML = parseInt(likes.innerHTML) + 1;
    ImageAdapter.addLikes(2);
  }
}
