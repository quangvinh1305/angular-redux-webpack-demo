import GenericEmailViewBox from '../../classes/GenericEmailViewBox'
import * as organizerEmailBoxActions from '../../actions/actions.organizerEmailBox';
export default class OrganizerEmailBoxController extends GenericEmailViewBox {
  constructor($ngRedux, $scope, $http) {
    'ngInject';

    super($ngRedux, $scope, $http, mapStateToThis, organizerEmailBoxActions);
    /* ngRedux will merge the requested state's slice and actions onto this, 
    you don't need to redefine them in your controller */
  }
}

function mapStateToThis(state) {
  console.log(state);
  return {
    messages: state.OrganizerEmailBoxReducer
  };
}