document.addEventListener('DOMContentLoaded', function() {
  const imageId = 15 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

    fetchImg();

    function fetchImg() {
      return fetch(imageURL)
      .then(res => res.json()
      .then(json => console.log(json))
      );
    }

    function renderImg() {
      let imgTag = document.querySelector('#image')
      let imgName = document.querySelector('#name')
      let imgLikes = document.querySelector('#likes')
      let imgCommentsContainer = document.querySelector('#comments')
      let imgComment = document.createElement("li")

      fetchImg().then(img => {
        let img = new Image(img);

        imgTag.setAttribute("url", imageURL)
        imgName.innerText = Image.name
        imgLikes.innerText = Image.like_count
        // imgComment.innerText = Image.

    });

    }

})
