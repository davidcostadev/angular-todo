import HomeController from '../controllers/home/Home.controller';
import AboutController from '../controllers/about/About.controller';


export default function routerConfig($provide, $routeProvider) {
  $provide.factory('$routeProvider', function () {
      return $routeProvider;
  });

  $routeProvider
    .when('/', {
      name: 'home',
      template: HomeController.getTemplateUrl(),
      controllerAs: HomeController.getControllerTemplateName(),
      controller: HomeController,
    })
    .when('/about', {
      name: 'about',
      template: AboutController.getTemplateUrl(),
      controllerAs: AboutController.getControllerTemplateName(),
      controller: AboutController,
    })
    .otherwise({
      redirectTo: '/'
    });
}