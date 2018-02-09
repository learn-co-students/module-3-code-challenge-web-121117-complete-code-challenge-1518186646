class Comment {
  constructor({ id, content }) {
    this.content = content;
    this.id = id;
  }

  render() {
    let comments = document.getElementById("comments");
    let li = document.createElement("li");
    li.innerText = this.content;
    li.data = this.id;
    comments.append(li);
  }
}
