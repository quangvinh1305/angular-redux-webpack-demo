import angular from 'angular';
import OrganizerEmailBoxController from './organizerEmailBox.controller'
import template from './oganizerEmailBox.html'


const options = {
  bindings: {
    accountid: '<',
    path: '@'
  },
  controller: OrganizerEmailBoxController,
  template
}

export default angular.module('components.organizerEmailbox', [])
  .component('organizeremailbox', options)
  .name;