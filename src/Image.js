const newImage = (function() {
  return class newImage {
    constructor({ url }) {
      // this.id = id;
      this.url = url;
      // this.name = name;
      // this.like_count = like_count;
      // this.comments = comments;
      // console.log(this);
    }
    //   "id": 1,

    // "url": "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg",
    // "name": "Science Fair",
    // "like_count": 0,
    // "comments": [
    //   {
    //     "id": 1,
    //     "content": "first comment!",
    //     "created_at": "2017-09-27T18:18:05.623Z",
    //     "updated_at": "2017-09-27T18:18:05.623Z"
    //   }

    render() {
      ImgApi.getImgData();
    }

    // ends class
  };
})(); //closes whole thing
