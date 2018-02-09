const Comment = (function() {
  return class Comment {
    constructor({ content, id, image_id }) {
      this.content = content;
      this.id = id;
      this.imageId = image_id;
    }
  };
})();
