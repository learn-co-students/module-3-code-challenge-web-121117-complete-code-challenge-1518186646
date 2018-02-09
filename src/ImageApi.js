const ImageApi = function () {
  return class ImageApi {
    static fetchImage(imageURL) {
      return fetch(imageURL, {
        method: 'GET'
      }).then(res => res.json())
    }

    static createLike(likeURL) {
      return fetch(likeURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: { image_id: 8 }
      }).then(res => res.json())
    }
  }
}();