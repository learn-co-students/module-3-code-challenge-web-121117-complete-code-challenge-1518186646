// HOLD ALL OF THE INFORMATION INSIDE OF OUR APP
const App = (function(){
  return class App {
    static initialize(){
      App.renderImageUrl();
      console.log("app is running")
    }

    static renderImageUrl(){
      imageAdapter.getImageUrl()
      .then(json =>{
        let imageUrl = document.getElementbyId("all-images");
        images.forEach(function(image){
          imageUrl.append(image.render())
        })
      })
    }
  }
})();
