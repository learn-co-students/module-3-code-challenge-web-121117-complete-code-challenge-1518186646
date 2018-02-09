document.addEventListener("DOMContentLoaded", function() {
  const imageId = 10; //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;
  const likeURL = `https://randopic.herokuapp.com/likes/`;
  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  // add event listener for like button
  let like_button = document.getElementById("like_button");
  like_button.addEventListener("click", function() {
    let likes = document.getElementById("likes");
    likes.innerText = parseInt(likes.innerText) + 1;
    ImageAdapter.addLike();
  });

  // add add event listener for the comment submit button
  let commentForm = document.getElementById("comment_form");
  commentForm.addEventListener("submit", function() {
    event.preventDefault();
    commentBody = document.getElementById("comment_input").value;
    ImageAdapter.addComment(commentBody).then(json => console.log(json));
    let comment = new Comment({ content: commentBody });
    comment.render();
    document.getElementById("comment_input").value = "";
  });

  // render the image, likes, title, and comments on the page
  Image.getImage();
});
