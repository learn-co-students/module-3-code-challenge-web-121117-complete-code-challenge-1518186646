const CommentApi = function () {
  return class CommentApi {
    // static fetchcomments(commentsURL) {
    //   return fetch(commentsURL, {
    //     method: 'GET'
    //   }).then(res => res.json())
    // }

    static createComment(commentsURL, newContent) {
      fetch(commentsURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: { image_id: 8,
                content: newContent
        }
      })
    }
  }
}();