import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Starboard';

    config.map([
      {route: '', moduleId: 'pages/home/home', title: 'Home'}
    ]);
  }
}
