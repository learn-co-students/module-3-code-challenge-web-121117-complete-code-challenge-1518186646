const ImageApi = (function() {
  return class ImageApi {
    static fetchImage() {
      return fetch("https://randopic.herokuapp.com/images/6").then(res =>
        res.json()
      );
    }

    static addLikes() {
      return (
        fetch("https://randopic.herokuapp.com/likes"),
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            image_id: 6
          })
        }.then(res => res.json())
      );
    }
  };
})();
