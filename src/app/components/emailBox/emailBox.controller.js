import GenericEmailViewBox from '../../classes/GenericEmailViewBox'
import * as EmailActions from '../../actions/actions.email';

export default class EmailBoxController extends GenericEmailViewBox {
  constructor($ngRedux, $scope, $http) {
    'ngInject';
    super($ngRedux, $scope,  $http, mapStateToThis, EmailActions);

    /* ngRedux will merge the requested state's slice and actions onto this, 
    you don't need to redefine them in your controller */
    
  }
}

function mapStateToThis(state) {
  console.log(state)
  return {
    messages: state.EmailBoxReducer
  };
}