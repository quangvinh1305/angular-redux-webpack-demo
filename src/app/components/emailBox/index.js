import angular from 'angular';
import EmailBoxController from './emailBox.controller'
import template from './emailBox.html'


const options = {
  bindings: {
    accountid: '<',
    path: '@'
  },
  controller: EmailBoxController,
  template
}

export default angular.module('components.emailbox', [])
  .component('emailbox', options)
  .name;