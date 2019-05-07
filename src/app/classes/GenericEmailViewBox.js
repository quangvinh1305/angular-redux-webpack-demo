export default class GenericEmailViewBox {

  addMessages(messages){
    if(messages){
        this.fetchMessages(messages);
    }
  }
  deleteMessage(messages){
    console.log(messages);
  }
}
