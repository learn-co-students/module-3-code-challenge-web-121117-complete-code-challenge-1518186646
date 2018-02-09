class Comment {
  constructor({content, image_id}){
    this.content = content
    this.image_id = image_id
  }

  render(){
    let li = document.createElement('li')
    let tnode = document.createTextNode(this.content)
    li.append(tnode)
    return li
  }
}
