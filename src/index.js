// ༼ つ ◕_◕ ༽つ ⒸⓇⓊⒹ ༼ つ ◕_◕ ༽つ
// ༼ つ ◕_◕ ༽つ ⒸⓇⓊⒹ ༼ つ ◕_◕ ༽つ
// ༼ つ ◕_◕ ༽つ ⒸⓇⓊⒹ ༼ つ ◕_◕ ༽つ

document.addEventListener("DOMContentLoaded", function() {
  const imageId = 16; //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;
  const likeURL = `https://randopic.herokuapp.com/likes/`;
  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  let imageDisplay = document.querySelector("#image");
  let imageName = document.querySelector("#name");
  let imageLikes = document.querySelector("#likes");
  let likeButton = document.querySelector("#like_button");
  let commentsList = document.querySelector("#comments");
  let commentForm = document.querySelector("#comment_form");
  let commentInput = document.querySelector("#comment_input");

  function getImage() {
    return fetch(imageURL).then(res => res.json());
  }

  function updateLikes() {
    return fetch(likeURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId
      })
    }).then(res => res.json());
  }

  //NOT USING THIS NEW COMMENT FUNCTION

  // function newComment() {
  //   return fetch(commentsURL, {
  //     method: "POST",
  //     headers: {},
  //     body: JSON.stringify({})
  //   }).then(res => res.json());
  // }

  //INCOMPLETE DELETE FUNCTIONALITY

  // function deleteComment() {
  //   return fetch("https://randopic.herokuapp.com/comments/" + commentId, {
  //     method: "DELETE"
  //   });
  // }

  getImage().then(image => {
    imageDisplay.src = image.url;
    imageName.innerHTML = image.name;
    imageLikes.innerHTML = image.like_count;
    let imageComments = image.comments;
    imageComments.forEach(function(comment) {
      newCommentLi = document.createElement("li");
      newCommentLi.append(comment.content);
      commentsList.append(newCommentLi);
    });
  });

  likeButton.addEventListener("click", function() {
    let imageLikesNumber = parseInt(imageLikes.innerHTML);
    let newImageLikesNumber = (imageLikesNumber += 1);
    imageLikes.innerHTML = newImageLikesNumber;
    updateLikes();
  });

  commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let commentText = commentInput.value;

    fetch(commentsURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId,
        content: commentText
      })
    }).then(res => res.json());

    let newCommentLi = document.createElement("li");
    newCommentLi.append(commentText);
    commentsList.append(newCommentLi);
    commentInput.value = "";
  });
});
