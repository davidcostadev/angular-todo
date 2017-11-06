import BaseController from '../Base.controller';
import HomeView from './home.html'

export default class HomeController extends BaseController {
  constructor (InjectedService) {
    super();
    this.InjectedService = InjectedService;
  }


  static getTemplateUrl() {
    return HomeView
  }
}