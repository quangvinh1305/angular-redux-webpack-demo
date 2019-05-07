export default class GenericEmailViewBox {
  constructor($ngRedux, $scope, $http, mapStateToThis, organizerEmailBoxActions) {
    'ngInject';

    /* ngRedux will merge the requested state's slice and actions onto this, 
    you don't need to redefine them in your controller */
    
    let unsubscribe = $ngRedux.connect(mapStateToThis, organizerEmailBoxActions)(this);
    $scope.$on('$destroy', unsubscribe);
    if(this.messages.length > 0) return console.log("fetchNewMessages");
    $http.get("https://blushandbow.com/wp-json/wp/v2/posts").then((res) => {
        const data = res.data;
        this.addMessages(data);
    })
  }
  addMessages(messages){
    if(messages){
        this.fetchMessages(messages);
    }
  }
  deleteMessage(messages){
    console.log(messages);
  }
}
