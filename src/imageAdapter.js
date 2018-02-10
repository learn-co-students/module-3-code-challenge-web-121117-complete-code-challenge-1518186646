class ImageAdapter {
  static getImage(id) {
    return fetch(`https://randopic.herokuapp.com/images/${id}`).then(res =>
      res.json()
    );
  }

  static addLikes(id) {
    return fetch(`https://randopic.herokuapp.com/likes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: id
      })
    }).then(res => res.json());
  }

  static addComment(id, content) {
    return fetch(`https://randopic.herokuapp.com/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: id,
        content: content
      })
    }).then(res => res.json());
  }

  static deleteComment(id) {
    return fetch(`https://randopic.herokuapp.com/comments/${id}`, {
      method: "DELETE"
    });
  }
}
