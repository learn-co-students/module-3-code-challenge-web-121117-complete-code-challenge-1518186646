document.addEventListener('DOMContentLoaded', function() {
  const imageId = 11
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  function getImages() {
    fetch('https://randopic.herokuapp.com/images/11')
    .then(response => response.json())
    .then(data => {
      var newImage = new Image(data)
      newImage.renderImage(data);
      return newImage
    })
  }
  getImages()

  function updateImage(newImage){
    debugger
    fetch(`https://randopic.herokuapp.com/likes`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newImage)
      }).then(response => {response.json();});
  }


    let likeButton = document.querySelector("#like_button");

    likeButton.addEventListener("click",function(event){
      event.preventDefault();
      let likeValue = document.querySelector("#likes");
      let likeValueNum = parseInt(likeValue.innerText);
      let newImage = document.querySelector('#image')
      likeValue.innerText = likeValueNum += 1;
      // debugger
      let currentImage = new Image({id: newImage.dataset.id, like_count: likeValueNum})
      updateImage(currentImage)
      // currentImage.like_count = likeValueNum
      // debugger

    })
});
