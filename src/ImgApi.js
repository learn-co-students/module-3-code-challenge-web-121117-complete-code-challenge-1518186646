const ImgApi = (function() {
  return class ImgApi {
    static getImg() {
      return fetch("http://randopic.herokuapp.com/images/12").then(res =>
        res.json()
      );
    }

    // static postLike(make_like){
    //   return fetch("http://randopic.herokuapp.com/images/12", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //        like_count: make_like
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    // }

  };
})();
