// app.config.js
import {RootReducer} from './reducers/index'
console.log(RootReducer)
import createLogger from 'redux-logger';

export default function config($urlRouterProvider, $locationProvider, $ngReduxProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  const logger = createLogger();
  $ngReduxProvider.createStoreWith(RootReducer, [logger]);

}