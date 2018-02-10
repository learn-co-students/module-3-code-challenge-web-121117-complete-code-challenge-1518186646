class Comment {
  static init() {
    let form = document.getElementById("comment_form");
    form.addEventListener("submit", Comment.addComment);
    let comments = document.getElementById("comments");
    comments.addEventListener("click", Comment.deleteComment);
  }

  static addComment(e) {
    e.preventDefault();
    let input = document.getElementById("comment_input").value;
    let comments = document.getElementById("comments");
    ImageAdapter.addComment(2, input).then(json => {
      let li = document.createElement("li");
      li.innerHTML = input;
      comments.append(li);
    });
  }

  static deleteComment(e) {
    e.stopPropagation();
    let clicked = document.getElementById(event.target.parentElement.id);
    ImageAdapter.deleteComment(event.target.parentElement.id);
    clicked.remove();
  }
}
