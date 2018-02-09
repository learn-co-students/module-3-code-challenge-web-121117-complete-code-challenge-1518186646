const imageId = 10; //Enter your assigned imageId here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;
const likeURL = `https://randopic.herokuapp.com/likes/`;
const commentsURL = `https://randopic.herokuapp.com/comments/`;

class ImageAdapter {
  static getImage() {
    return fetch(imageURL).then(res => res.json());
  }

  static addLike() {
    return fetch(likeURL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId
      })
    });
  }

  static addComment(content) {
    return fetch(commentsURL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId,
        content: content
      })
    });
  }
}
