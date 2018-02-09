class Comment {
  static init() {
    let form = document.getElementById("comment_form");
    form.addEventListener("submit", Comment.addComment);
  }

  static addComment(e) {
    e.preventDefault();
    let commentInput = document.getElementById("comment_input").value;
    let commentBox = document.getElementById("comments");
    ImageAdapter.addComment(commentInput).then(json => {
      let li = document.createElement("li");
      li.append(commentInput);
      commentBox.append(li);
    });
  }
}
