const App = (function() {
  return class App {
    static init() {
      this.renderImage();
    }

    static renderImage() {
      let htmlImage = document.getElementById("image");
      let htmlName = document.getElementById("name");
      let htmlLikes = document.getElementById("likes");
      let htmlComments = document.getElementById("comments");

      ImageApi.fetchImage().then(fetchedImage => {
        htmlImage.src = fetchedImage.url;
        htmlName.append(fetchedImage.name);
        htmlLikes = fetchedImage.like_count;

        let comments = fetchedImage.comments;
        comments.forEach(function(c) {
          let newComment = document.createElement("li");
          newComment.innerHTML = c.content;
          htmlComments.append(newComment);
        });
      });
    }

    // let likeButton = document.getElementById("like_button");
    // console.log(likeButton);
    // let likeCount = document.getElementById("likes").innerHTML;
    // let likeString = parseInt(likeCount);

    // likeButton.addEventListener("click", this.updateLikes);

    static updateLikes() {
      ImageApi.addLikes().then(likes => {
        // Like magic here
      });
    }
  };
})();
