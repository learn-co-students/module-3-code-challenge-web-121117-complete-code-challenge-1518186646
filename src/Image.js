//has render methods
  // const Image = (function() {
  //   return
    class Image {
      constructor({ id, url, name, like_count, comments }) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.like_count = like_count;
        this.comments = comments;
      }

      renderImage(data) {
        // debugger
        let newImage = document.querySelector('#image');
        newImage.src = data.url;
        newImage.dataset.id = data.id
        let imageName = document.querySelector('#name');
        imageName.innerText = data.name;
        let imageLikes = document.querySelector('#likes');
        imageLikes.value = data.like_count;
        let imageComments = document.querySelector('#comments')
        let commentsInput = document.querySelector('#comment_input')
        let commentsList = document.createElement('li')
        let commentsText = document.createTextNode(commentsInput.value)
        commentsList.append(commentsText);
        imageComments.append(commentsList)
      }



    };
  // })();
