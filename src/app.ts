import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'ShadeCycle';

    config.map([
      {route: '', moduleId: 'pages/home/home', title: 'Gradient text shadows in SASS!'}
    ]);
  }
}
