const Adapter = (function() {
  const imageId = 4
  const IMAGEURL = `https://randopic.herokuapp.com/images`
  const LIKEURL = `https://randopic.herokuapp.com/likes/`
  const COMMENTSURL = `https://randopic.herokuapp.com/comments/`

  return class Adapter {
    static renderImage() {
      return fetch(`${IMAGEURL}/${imageId}`).then(res => res.json())
    }

    // static updateLike(id) {
    //   return fetch(`${LIKEURL}`, {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       image_id = id
    //     })
    //   }).then(res => res.json())
    // }

    static addComment(id, content) {
      return fetch(`${COMMENTSURL}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: id,
          content: content
        })
      }).then(res => res.json())
    }
  }
})();
