const ImageAdapter = (function() {
  return class ImageAdapter {
    static getImage(imageId) {
      return fetch(`https://randopic.herokuapp.com/images/${imageId}`).then(
        res => res.json()
      );
    }

    static addLike(likes) {
      return fetch(`https://randopic.herokuapp.com/likes/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          image_id: 2,
          like_count: likes
        })
      });
    }

    static addComment(comment) {
      return fetch(`https://randopic.herokuapp.com/comments/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          image_id: 2,
          comments: comment
        })
      });
    }
  };
})();
