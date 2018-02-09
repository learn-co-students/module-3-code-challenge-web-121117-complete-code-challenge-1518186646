class Image {

    constructor({ id, url, name, like_count, comments }) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.like_count = like_count;
        this.comments = comments;
      }

    function countLikes() {
      let countBtn = document.querySelector('#like_button')
      let counterField = document.querySelector('#likes')

      let counter = counterField.this.like_count

      parseInt(counter, 10)
      console.log(counter)

      countBtn.addEventListener('click', fucntion(e) {
        e.preventDefault();

        counter++

        const URL = 'https://randopic.herokuapp.com/likes'
          fetch(URL, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
            body: JSON.stringify({
            image_id: 15
          })
          .then(res => res.json())
            counterField.innerText = counter
          }

      })
    }

    function submitComment(){
      let form = document.querySelector('#comment_form')
      form.addEventListener('submit', Comment.addComment)
    }

};
