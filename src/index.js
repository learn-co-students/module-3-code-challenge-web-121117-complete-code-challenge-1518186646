document.addEventListener("DOMContentLoaded", function() {
  const imageId = 5; //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;
  const likeURL = `https://randopic.herokuapp.com/likes/`;
  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  fetch(imageURL)
    .then(response => response.json())
    .then(json => {
      //create image object
      const image = new Image(json);

      //add image to page
      document.getElementById("image").setAttribute("src", image.url);

      //add name to page
      let nameText = document.createTextNode(image.name);
      document.getElementById("name").append(nameText);

      //add like count to page
      let numLikes = document.createTextNode(image.likeCount);
      let likeSpan = document.getElementById("likes");
      likeSpan.innerHTML = "";
      likeSpan.append(numLikes);

      //create comments
      const comments = image.comments.map(function(comment) {
        let commentObj = new Comment(comment);
        const commentsUL = document.getElementById("comments");
        let commentLi = document.createElement("li");
        commentLi.dataset.id = commentObj.id;
        let commentText = document.createTextNode(commentObj.content);
        commentLi.append(commentText);
        commentsUL.append(commentLi);
      });

      //like button add likes
      const likeButton = document.getElementById("like_button");
      likeButton.addEventListener("click", function(event) {
        image.increaseLikeCount();

        //update like likeCount <- refactor matches above
        let numLikes = document.createTextNode(image.likeCount);
        let likeSpan = document.getElementById("likes");
        likeSpan.innerHTML = "";
        likeSpan.append(numLikes);

        //update backend likes
        let postData = { image_id: image.id };
        fetch(`https://randopic.herokuapp.com/likes/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        });
      });
      //optimistically render comment
      const CommentForm = document.getElementById("comment_form");
      CommentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        commentInput = document.getElementById("comment_input").value;
        const commentsUL = document.getElementById("comments");
        let commentLi = document.createElement("li");
        let commentText = document.createTextNode(commentInput);
        commentLi.append(commentText);
        commentsUL.append(commentLi);
        document.getElementById("comment_input").value = "";
      });
      //comment to backend
      //out of time
    });
});
