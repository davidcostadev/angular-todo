import BaseController from '../Base.controller';
import AboutView from './about.html'

export default class AboutController extends BaseController {
  constructor (InjectedService) {
    super();
    this.InjectedService = InjectedService;
  }


  static getTemplateUrl() {
    return AboutView
  }
}