document.addEventListener('DOMContentLoaded', function() {
  const imageId = 13 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
console.log("DA DOM IS LOADED")

//GET REQUEST
   function getImageUrl(){
      return fetch(imageURL)
      .then((res) => { return res.json() }).then((json) => {console.log(json)})
  }

//POST
 function postImagesUrl(){
     return fetch(imageURL, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         url: imageURL
       })
     })
     .then((res) => { return res.json() }).then((json) => {console.log(json)})
  }

getImageUrl();
postImagesUrl();

});
