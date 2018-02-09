const ImageApi = (function(){
  return class ImageApi {
    static fetchImages(){
      //----------------
      return fetch("https://randopic.herokuapp.com/images/:image_id").then(res => res.json());
    }
  }
})();
