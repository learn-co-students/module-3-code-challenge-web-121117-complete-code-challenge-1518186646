const App = (function() {
  return class App {

    static init() {
      console.log("Running app");
      this.renderImage();
      let like = document.getElementById("like_button-form");
      form.addEventListener("click", this.addLike);
    }

    static renderImage() {
      // console.log(img);
      let imgContainer = document.getElementById("image_card");
      // fetch the image
      ImgApi.getImg().then(imageJSON =>
      {
        let img = document.createElement("img")
        img.src = imageJSON.url
        img.name = imageJSON.name
        img.like_count = imageJSON.like_count
        img.comments = imageJSON.comments
        imgContainer.prepend(img)
      }
      )
    }

  //   static addLike(e){
  //   e.preventDefault()
  //   let like = document.getElementById("likes")
  //     ImgApi.add_like().then(imageJSON =>
  //   { img.like += 1 }

  // };

  // static handleLike(event) {
  //   //this deals with the comment
 }
})();
