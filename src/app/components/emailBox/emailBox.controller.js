import GenericEmailViewBox from '../../classes/GenericEmailViewBox'
import * as EmailActions from '../../actions/actions.email';

export default class EmailBoxController extends GenericEmailViewBox {
  constructor($ngRedux, $scope, $http) {
    'ngInject';
    super();

    /* ngRedux will merge the requested state's slice and actions onto this, 
    you don't need to redefine them in your controller */
    
    let unsubscribe = $ngRedux.connect(mapStateToThis, EmailActions)(this);
    $scope.$on('$destroy', unsubscribe);
    if(this.messages.length > 0) return console.log("fetchNewMessages");
    $http.get("https://blushandbow.com/wp-json/wp/v2/posts").then((res) => {
        const data = res.data;
        this.addMessages(data);
    })
  }
}

function mapStateToThis(state) {
  return {
    messages: state.EmailBoxReducer
  };
}