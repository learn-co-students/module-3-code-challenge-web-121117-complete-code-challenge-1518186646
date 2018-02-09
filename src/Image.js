const Image = (function() {
  return class Image {
    constructor({ url }) {
      this.url = url;
    }
    renderHTML() {
      let singleImage = document.createElement('li')
      singleImage.append(singleImage)
      return singleImage;
    }
    render(){
      return this.renderHTML();
    }
  }
})();
