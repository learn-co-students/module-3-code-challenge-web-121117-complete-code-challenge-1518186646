const Image = (function() {
  return class Image {
    constructor({ id, url, name, like_count, comments }) {
      this.id = id;
      this.url = url;
      this.name = name;
      this.likeCount = like_count;
      this.comments = comments;
    }

    increaseLikeCount() {
      this.likeCount += 1;
    }
  };
})();
