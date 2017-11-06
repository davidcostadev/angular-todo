import angular from 'angular'
import angularRouter from 'angular-route'

import Router from './router'

import HomeController from './controllers/home/Home.controller'


const name = 'David Costa'

console.log(`main${name }`)


angular
  .module('app', ['ngRoute'])
  .config(Router)
  .controller('HomeController', HomeController)

