import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import randomNames from '../../services/randomNames.service';
import greeting from '../../components/greeting.component';
import counter from '../../components/counter';
import emailbox from '../../components/emailBox';

export default angular.module('app.home', [uirouter, randomNames, greeting, counter, emailbox])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;