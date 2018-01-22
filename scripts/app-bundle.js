define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'ShadeCycle';
            config.map([
                { route: '', moduleId: 'pages/home/home', title: 'Gradient text shadows in SASS!' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBVUEsQ0FBQztRQVBDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1lBRTVCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUM7YUFDbEYsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILFVBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIGNvbmZpZy50aXRsZSA9ICdTaGFkZUN5Y2xlJztcclxuXHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAge3JvdXRlOiAnJywgbW9kdWxlSWQ6ICdwYWdlcy9ob21lL2hvbWUnLCB0aXRsZTogJ0dyYWRpZW50IHRleHQgc2hhZG93cyBpbiBTQVNTISd9XHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('pages/home/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.examples = [
                {
                    id: 'ex0',
                    text: 'Getting Started',
                    code: "npm install shade-cycle\n/* Now simply include the SCSS file! You're now ready to go. */\n@import 'path/to/node_modules/shade-cycle/dist/shadecycle.scss';"
                },
                {
                    id: 'ex1',
                    text: 'My cool title',
                    code: "#ex1 {\n  text-shadow: shade-cycle(15, 1, 1, cyan, hotpink);\n}"
                },
                {
                    id: 'ex2',
                    text: 'My cool title',
                    code: "#ex2 {\n  text-shadow: shade-cycle(10, 5, 5, red, blue);\n}"
                },
                {
                    id: 'ex3',
                    text: 'My cool title',
                    code: "#ex3 {\n  @include shade-cycle-animation(15, -1, 1, green, yellow, 10, 3000);\n}"
                },
                {
                    id: 'ex4',
                    text: 'My cool title',
                    code: "#ex4 {\n  text-shadow: shade-cycle(10, 1, 1, purple, darken(purple, 10%)), shade-cycle(10, -1, -1, orangered, darken(orangered, 10%));\n}"
                }
            ];
        }
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0ksYUFBUSxHQUFHO2dCQUNQO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSw0SkFFK0M7aUJBQ3hEO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxlQUFlO29CQUNyQixJQUFJLEVBQUUsaUVBRWhCO2lCQUNPO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxlQUFlO29CQUNyQixJQUFJLEVBQUUsNkRBRWhCO2lCQUNPO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxlQUFlO29CQUNyQixJQUFJLEVBQUUsa0ZBRWhCO2lCQUNPO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxlQUFlO29CQUNyQixJQUFJLEVBQUUsMklBRWhCO2lCQUNPO2FBQ0osQ0FBQztRQUNOLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtJQXRDWSxvQkFBSSIsImZpbGUiOiJwYWdlcy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSG9tZSB7XHJcbiAgICBleGFtcGxlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZXgwJyxcclxuICAgICAgICAgICAgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsXHJcbiAgICAgICAgICAgIGNvZGU6IGBucG0gaW5zdGFsbCBzaGFkZS1jeWNsZVxyXG4vKiBOb3cgc2ltcGx5IGluY2x1ZGUgdGhlIFNDU1MgZmlsZSEgWW91J3JlIG5vdyByZWFkeSB0byBnby4gKi9cclxuQGltcG9ydCAncGF0aC90by9ub2RlX21vZHVsZXMvc2hhZGUtY3ljbGUvZGlzdC9zaGFkZWN5Y2xlLnNjc3MnO2BcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdleDEnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnTXkgY29vbCB0aXRsZScsXHJcbiAgICAgICAgICAgIGNvZGU6IGAjZXgxIHtcclxuICB0ZXh0LXNoYWRvdzogc2hhZGUtY3ljbGUoMTUsIDEsIDEsIGN5YW4sIGhvdHBpbmspO1xyXG59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2V4MicsXHJcbiAgICAgICAgICAgIHRleHQ6ICdNeSBjb29sIHRpdGxlJyxcclxuICAgICAgICAgICAgY29kZTogYCNleDIge1xyXG4gIHRleHQtc2hhZG93OiBzaGFkZS1jeWNsZSgxMCwgNSwgNSwgcmVkLCBibHVlKTtcclxufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdleDMnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnTXkgY29vbCB0aXRsZScsXHJcbiAgICAgICAgICAgIGNvZGU6IGAjZXgzIHtcclxuICBAaW5jbHVkZSBzaGFkZS1jeWNsZS1hbmltYXRpb24oMTUsIC0xLCAxLCBncmVlbiwgeWVsbG93LCAxMCwgMzAwMCk7XHJcbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZXg0JyxcclxuICAgICAgICAgICAgdGV4dDogJ015IGNvb2wgdGl0bGUnLFxyXG4gICAgICAgICAgICBjb2RlOiBgI2V4NCB7XHJcbiAgdGV4dC1zaGFkb3c6IHNoYWRlLWN5Y2xlKDEwLCAxLCAxLCBwdXJwbGUsIGRhcmtlbihwdXJwbGUsIDEwJSkpLCBzaGFkZS1jeWNsZSgxMCwgLTEsIC0xLCBvcmFuZ2VyZWQsIGRhcmtlbihvcmFuZ2VyZWQsIDEwJSkpO1xyXG59YFxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"app.css\"></require>\n  <router-view></router-view>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  color: #eee;\n  background-color: #111;\n  margin: 0;\n  padding: 0;\n  background-image: url(\"static/images/space.png\");\n  text-align: center; }\n"; });
define('text!pages/home/home.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"pages/home/home.css\"></require>\r\n  <a href=\"https://github.com/zshall/ShadeCycle\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png\"></a>\r\n  <h1>ShadeCycle</h1>\r\n  <h2>Gradient text shadows in SASS!</h2>\r\n  <div class=\"container\">\r\n    <div class=\"row example\" repeat.for=\"ex of examples\">\r\n      <div class=\"col-md-4\">\r\n        <h3 id.bind=\"ex.id\">${ex.text}</h3>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <textarea class=\"form-control\" value.bind=\"ex.code\" readonly></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>"; });
define('text!pages/home/home.css', ['module'], function(module) { module.exports = "/**\r\nShadeCycle\r\nv0.1.1\r\n\r\nDistributed under the MIT License\r\n\r\nCopyright (c) 2017 Zach Hall\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy\r\nof this software and associated documentation files (the \"Software\"), to deal\r\nin the Software without restriction, including without limitation the rights\r\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\ncopies of the Software, and to permit persons to whom the Software is\r\nfurnished to do so, subject to the following conditions:\r\n\r\nThe above copyright notice and this permission notice shall be included in all\r\ncopies or substantial portions of the Software.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r\nSOFTWARE.\r\n**/\n@import url(\"https://fonts.googleapis.com/css?family=Lobster\");\nh1 {\n  color: hotpink;\n  font-size: 15vw;\n  font-family: 'Lobster', cursive;\n  margin: 10px;\n  padding: 10px;\n  text-shadow: 1px 1px  0 cyan, 2px 2px  0 #12f4fa, 3px 3px  0 #24eaf4, 4px 4px  0 #37dfef, 5px 5px  0 #49d4ea, 6px 6px  0 #5bc9e4, 7px 7px  0 #6dbfdf, 8px 8px  0 #80b4da, 9px 9px  0 #92a9d4, 10px 10px  0 #a49fcf, 11px 11px  0 #b694c9, 12px 12px  0 #c889c4, 13px 13px  0 #db7ebf, 14px 14px  0 #ed74b9, 15px 15px  0 hotpink, -1px -1px  0 blue, -2px -2px  0 #0000f7, -3px -3px  0 #0000ee, -4px -4px  0 #0000e6, -5px -5px  0 #0000de, -6px -6px  0 #0000d6, -7px -7px  0 mediumblue, -8px -8px  0 #0000c5, -9px -9px  0 #0000bd, -10px -10px  0 #0000b4, -11px -11px  0 #0000ac, -12px -12px  0 #0000a4, -13px -13px  0 #00009c, -14px -14px  0 #000093, -15px -15px  0 darkblue; }\n\n.example {\n  margin-bottom: 40px; }\n\nh3 {\n  font-size: 3em;\n  font-family: 'Lobster', cursive; }\n\nh2 {\n  font-size: 5vw;\n  margin-top: 70px;\n  margin-bottom: 70px; }\n\np {\n  font-size: 2em;\n  font-weight: bold; }\n\ntextarea.form-control {\n  height: 80px;\n  font-family: Courier New, Courier, monospace;\n  background: #333 !important;\n  color: #eee; }\n\n#ex0 {\n  text-shadow: 0px 1px  0 green, 0px 2px  0 #067706, 0px 3px  0 #0b6f0b, 0px 4px  0 #116611, 0px 5px  0 #175e17, 0px 6px  0 #1c551c, 0px 7px  0 #224d22, 0px 8px  0 #284428, 0px 9px  0 #2d3c2d, 0px 10px  0 #333333; }\n\n#ex1 {\n  text-shadow: 1px 1px  0 cyan, 2px 2px  0 #12f4fa, 3px 3px  0 #24eaf4, 4px 4px  0 #37dfef, 5px 5px  0 #49d4ea, 6px 6px  0 #5bc9e4, 7px 7px  0 #6dbfdf, 8px 8px  0 #80b4da, 9px 9px  0 #92a9d4, 10px 10px  0 #a49fcf, 11px 11px  0 #b694c9, 12px 12px  0 #c889c4, 13px 13px  0 #db7ebf, 14px 14px  0 #ed74b9, 15px 15px  0 hotpink; }\n\n#ex2 {\n  text-shadow: 5px 5px  0 red, 10px 10px  0 #e3001c, 15px 15px  0 #c60039, 20px 20px  0 #aa0055, 25px 25px  0 #8e0071, 30px 30px  0 #71008e, 35px 35px  0 #5500aa, 40px 40px  0 #3900c6, 45px 45px  0 #1c00e3, 50px 50px  0 blue; }\n\n#ex3 {\n  animation: u49b19724 3000ms steps(10, end) infinite; }\n\n@keyframes u49b19724 {\n  0% {\n    text-shadow: -1px 1px  0 green, -2px 2px  0 #1a8d00, -3px 3px  0 #339900, -4px 4px  0 #4da600, -5px 5px  0 #66b300, -6px 6px  0 #80c000, -7px 7px  0 #99cc00, -8px 8px  0 #b3d900, -9px 9px  0 #cce600, -10px 10px  0 #e6f200, -11px 11px  0 yellow, -12px 12px  0 green, -13px 13px  0 #1a8d00, -14px 14px  0 #339900, -15px 15px  0 #4da600; }\n  9.09091% {\n    text-shadow: -1px 1px  0 #1a8d00, -2px 2px  0 #339900, -3px 3px  0 #4da600, -4px 4px  0 #66b300, -5px 5px  0 #80c000, -6px 6px  0 #99cc00, -7px 7px  0 #b3d900, -8px 8px  0 #cce600, -9px 9px  0 #e6f200, -10px 10px  0 yellow, -11px 11px  0 green, -12px 12px  0 #1a8d00, -13px 13px  0 #339900, -14px 14px  0 #4da600, -15px 15px  0 #66b300; }\n  18.18182% {\n    text-shadow: -1px 1px  0 #339900, -2px 2px  0 #4da600, -3px 3px  0 #66b300, -4px 4px  0 #80c000, -5px 5px  0 #99cc00, -6px 6px  0 #b3d900, -7px 7px  0 #cce600, -8px 8px  0 #e6f200, -9px 9px  0 yellow, -10px 10px  0 green, -11px 11px  0 #1a8d00, -12px 12px  0 #339900, -13px 13px  0 #4da600, -14px 14px  0 #66b300, -15px 15px  0 #80c000; }\n  27.27273% {\n    text-shadow: -1px 1px  0 #4da600, -2px 2px  0 #66b300, -3px 3px  0 #80c000, -4px 4px  0 #99cc00, -5px 5px  0 #b3d900, -6px 6px  0 #cce600, -7px 7px  0 #e6f200, -8px 8px  0 yellow, -9px 9px  0 green, -10px 10px  0 #1a8d00, -11px 11px  0 #339900, -12px 12px  0 #4da600, -13px 13px  0 #66b300, -14px 14px  0 #80c000, -15px 15px  0 #99cc00; }\n  36.36364% {\n    text-shadow: -1px 1px  0 #66b300, -2px 2px  0 #80c000, -3px 3px  0 #99cc00, -4px 4px  0 #b3d900, -5px 5px  0 #cce600, -6px 6px  0 #e6f200, -7px 7px  0 yellow, -8px 8px  0 green, -9px 9px  0 #1a8d00, -10px 10px  0 #339900, -11px 11px  0 #4da600, -12px 12px  0 #66b300, -13px 13px  0 #80c000, -14px 14px  0 #99cc00, -15px 15px  0 #b3d900; }\n  45.45455% {\n    text-shadow: -1px 1px  0 #80c000, -2px 2px  0 #99cc00, -3px 3px  0 #b3d900, -4px 4px  0 #cce600, -5px 5px  0 #e6f200, -6px 6px  0 yellow, -7px 7px  0 green, -8px 8px  0 #1a8d00, -9px 9px  0 #339900, -10px 10px  0 #4da600, -11px 11px  0 #66b300, -12px 12px  0 #80c000, -13px 13px  0 #99cc00, -14px 14px  0 #b3d900, -15px 15px  0 #cce600; }\n  54.54545% {\n    text-shadow: -1px 1px  0 #99cc00, -2px 2px  0 #b3d900, -3px 3px  0 #cce600, -4px 4px  0 #e6f200, -5px 5px  0 yellow, -6px 6px  0 green, -7px 7px  0 #1a8d00, -8px 8px  0 #339900, -9px 9px  0 #4da600, -10px 10px  0 #66b300, -11px 11px  0 #80c000, -12px 12px  0 #99cc00, -13px 13px  0 #b3d900, -14px 14px  0 #cce600, -15px 15px  0 #e6f200; }\n  63.63636% {\n    text-shadow: -1px 1px  0 #b3d900, -2px 2px  0 #cce600, -3px 3px  0 #e6f200, -4px 4px  0 yellow, -5px 5px  0 green, -6px 6px  0 #1a8d00, -7px 7px  0 #339900, -8px 8px  0 #4da600, -9px 9px  0 #66b300, -10px 10px  0 #80c000, -11px 11px  0 #99cc00, -12px 12px  0 #b3d900, -13px 13px  0 #cce600, -14px 14px  0 #e6f200, -15px 15px  0 yellow; }\n  72.72727% {\n    text-shadow: -1px 1px  0 #cce600, -2px 2px  0 #e6f200, -3px 3px  0 yellow, -4px 4px  0 green, -5px 5px  0 #1a8d00, -6px 6px  0 #339900, -7px 7px  0 #4da600, -8px 8px  0 #66b300, -9px 9px  0 #80c000, -10px 10px  0 #99cc00, -11px 11px  0 #b3d900, -12px 12px  0 #cce600, -13px 13px  0 #e6f200, -14px 14px  0 yellow, -15px 15px  0 green; }\n  81.81818% {\n    text-shadow: -1px 1px  0 #e6f200, -2px 2px  0 yellow, -3px 3px  0 green, -4px 4px  0 #1a8d00, -5px 5px  0 #339900, -6px 6px  0 #4da600, -7px 7px  0 #66b300, -8px 8px  0 #80c000, -9px 9px  0 #99cc00, -10px 10px  0 #b3d900, -11px 11px  0 #cce600, -12px 12px  0 #e6f200, -13px 13px  0 yellow, -14px 14px  0 green, -15px 15px  0 #1a8d00; }\n  90.90909% {\n    text-shadow: -1px 1px  0 yellow, -2px 2px  0 green, -3px 3px  0 #1a8d00, -4px 4px  0 #339900, -5px 5px  0 #4da600, -6px 6px  0 #66b300, -7px 7px  0 #80c000, -8px 8px  0 #99cc00, -9px 9px  0 #b3d900, -10px 10px  0 #cce600, -11px 11px  0 #e6f200, -12px 12px  0 yellow, -13px 13px  0 green, -14px 14px  0 #1a8d00, -15px 15px  0 #339900; }\n  100% {\n    text-shadow: -1px 1px  0 green, -2px 2px  0 #1a8d00, -3px 3px  0 #339900, -4px 4px  0 #4da600, -5px 5px  0 #66b300, -6px 6px  0 #80c000, -7px 7px  0 #99cc00, -8px 8px  0 #b3d900, -9px 9px  0 #cce600, -10px 10px  0 #e6f200, -11px 11px  0 yellow, -12px 12px  0 green, -13px 13px  0 #1a8d00, -14px 14px  0 #339900, -15px 15px  0 #4da600; } }\n\n#ex4 {\n  text-shadow: 1px 1px  0 purple, 2px 2px  0 #7a007a, 3px 3px  0 #750075, 4px 4px  0 #6f006f, 5px 5px  0 #690069, 6px 6px  0 #640064, 7px 7px  0 #5e005e, 8px 8px  0 #580058, 9px 9px  0 #530053, 10px 10px  0 #4d004d, -1px -1px  0 orangered, -2px -2px  0 #f94300, -3px -3px  0 #f44200, -4px -4px  0 #ee4000, -5px -5px  0 #e83f00, -6px -6px  0 #e33d00, -7px -7px  0 #dd3c00, -8px -8px  0 #d73a00, -9px -9px  0 #d23900, -10px -10px  0 #cc3700; }\n"; });
//# sourceMappingURL=app-bundle.js.map