define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Starboard';
            config.map([
                { route: '', moduleId: 'pages/home/home', title: 'Home' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBVUEsQ0FBQztRQVBDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBRTNCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO2FBQ3hELENBQUMsQ0FBQztRQUNMLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnU3RhcmJvYXJkJztcblxuICAgIGNvbmZpZy5tYXAoW1xuICAgICAge3JvdXRlOiAnJywgbW9kdWxlSWQ6ICdwYWdlcy9ob21lL2hvbWUnLCB0aXRsZTogJ0hvbWUnfVxuICAgIF0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
                    code: "/* Simply include the SCSS file! You're now ready to go. */\n@import 'dist/shadecycle.scss';"
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
                    code: "#ex3 {\n  @include shade-cycle-animation(15, -1, 1, green, yellow, 14, 1000);\n}"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0ksYUFBUSxHQUFHO2dCQUNQO29CQUNJLEVBQUUsRUFBRSxLQUFLO29CQUNULElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSw4RkFDYztpQkFDdkI7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLEtBQUs7b0JBQ1QsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLElBQUksRUFBRSxpRUFFaEI7aUJBQ087Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLEtBQUs7b0JBQ1QsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLElBQUksRUFBRSw2REFFaEI7aUJBQ087Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLEtBQUs7b0JBQ1QsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLElBQUksRUFBRSxrRkFFaEI7aUJBQ087Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLEtBQUs7b0JBQ1QsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLElBQUksRUFBRSwySUFFaEI7aUJBQ087YUFDSixDQUFDO1FBQ04sQ0FBQztRQUFELFdBQUM7SUFBRCxDQXJDQSxBQXFDQyxJQUFBO0lBckNZLG9CQUFJIiwiZmlsZSI6InBhZ2VzL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIb21lIHtcclxuICAgIGV4YW1wbGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdleDAnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJyxcclxuICAgICAgICAgICAgY29kZTogYC8qIFNpbXBseSBpbmNsdWRlIHRoZSBTQ1NTIGZpbGUhIFlvdSdyZSBub3cgcmVhZHkgdG8gZ28uICovXHJcbkBpbXBvcnQgJ2Rpc3Qvc2hhZGVjeWNsZS5zY3NzJztgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZXgxJyxcclxuICAgICAgICAgICAgdGV4dDogJ015IGNvb2wgdGl0bGUnLFxyXG4gICAgICAgICAgICBjb2RlOiBgI2V4MSB7XHJcbiAgdGV4dC1zaGFkb3c6IHNoYWRlLWN5Y2xlKDE1LCAxLCAxLCBjeWFuLCBob3RwaW5rKTtcclxufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdleDInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnTXkgY29vbCB0aXRsZScsXHJcbiAgICAgICAgICAgIGNvZGU6IGAjZXgyIHtcclxuICB0ZXh0LXNoYWRvdzogc2hhZGUtY3ljbGUoMTAsIDUsIDUsIHJlZCwgYmx1ZSk7XHJcbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZXgzJyxcclxuICAgICAgICAgICAgdGV4dDogJ015IGNvb2wgdGl0bGUnLFxyXG4gICAgICAgICAgICBjb2RlOiBgI2V4MyB7XHJcbiAgQGluY2x1ZGUgc2hhZGUtY3ljbGUtYW5pbWF0aW9uKDE1LCAtMSwgMSwgZ3JlZW4sIHllbGxvdywgMTQsIDEwMDApO1xyXG59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2V4NCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdNeSBjb29sIHRpdGxlJyxcclxuICAgICAgICAgICAgY29kZTogYCNleDQge1xyXG4gIHRleHQtc2hhZG93OiBzaGFkZS1jeWNsZSgxMCwgMSwgMSwgcHVycGxlLCBkYXJrZW4ocHVycGxlLCAxMCUpKSwgc2hhZGUtY3ljbGUoMTAsIC0xLCAtMSwgb3JhbmdlcmVkLCBkYXJrZW4ob3JhbmdlcmVkLCAxMCUpKTtcclxufWBcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"app.css\"></require>\n  <router-view></router-view>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  color: #eee;\n  background-color: #111;\n  margin: 0;\n  padding: 0;\n  background-image: url(\"static/images/space.png\");\n  text-align: center; }\n"; });
define('text!pages/home/home.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"pages/home/home.css\"></require>\r\n  <h1>ShadeCycle</h1>\r\n  <h2>Gradient text shadows in SASS!</h2>\r\n  \r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <p>Examples:</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row example\" repeat.for=\"ex of examples\">\r\n      <div class=\"col-md-4\">\r\n        <h3 id.bind=\"ex.id\">${ex.text}</h3>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <textarea class=\"form-control\" value.bind=\"ex.code\" readonly></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>"; });
define('text!pages/home/home.css', ['module'], function(module) { module.exports = "/**\r\nShadeCycle\r\nv1.0\r\n\r\nDistributed under the MIT License\r\n\r\nCopyright (c) 2017 Zach Hall\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy\r\nof this software and associated documentation files (the \"Software\"), to deal\r\nin the Software without restriction, including without limitation the rights\r\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\ncopies of the Software, and to permit persons to whom the Software is\r\nfurnished to do so, subject to the following conditions:\r\n\r\nThe above copyright notice and this permission notice shall be included in all\r\ncopies or substantial portions of the Software.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r\nSOFTWARE.\r\n**/\n@import url(\"https://fonts.googleapis.com/css?family=Lobster\");\nh1 {\n  color: hotpink;\n  font-size: 10em;\n  font-family: 'Lobster', cursive;\n  margin: 10px;\n  padding: 10px;\n  text-shadow: 1px 1px  0 cyan, 2px 2px  0 #12f4fa, 3px 3px  0 #24eaf4, 4px 4px  0 #37dfef, 5px 5px  0 #49d4ea, 6px 6px  0 #5bc9e4, 7px 7px  0 #6dbfdf, 8px 8px  0 #80b4da, 9px 9px  0 #92a9d4, 10px 10px  0 #a49fcf, 11px 11px  0 #b694c9, 12px 12px  0 #c889c4, 13px 13px  0 #db7ebf, 14px 14px  0 #ed74b9, 15px 15px  0 hotpink, -1px -1px  0 blue, -2px -2px  0 #0000f7, -3px -3px  0 #0000ee, -4px -4px  0 #0000e6, -5px -5px  0 #0000de, -6px -6px  0 #0000d6, -7px -7px  0 mediumblue, -8px -8px  0 #0000c5, -9px -9px  0 #0000bd, -10px -10px  0 #0000b4, -11px -11px  0 #0000ac, -12px -12px  0 #0000a4, -13px -13px  0 #00009c, -14px -14px  0 #000093, -15px -15px  0 darkblue; }\n\n.example {\n  margin-bottom: 40px; }\n\nh3 {\n  font-size: 3em;\n  font-family: 'Lobster', cursive; }\n\nh2 {\n  font-size: 4em; }\n\np {\n  font-size: 2em;\n  font-weight: bold; }\n\ntextarea.form-control {\n  height: 80px;\n  font-family: Courier New, Courier, monospace;\n  background: #333 !important;\n  color: #eee; }\n\n#ex0 {\n  text-shadow: 0px 1px  0 green, 0px 2px  0 #067706, 0px 3px  0 #0b6f0b, 0px 4px  0 #116611, 0px 5px  0 #175e17, 0px 6px  0 #1c551c, 0px 7px  0 #224d22, 0px 8px  0 #284428, 0px 9px  0 #2d3c2d, 0px 10px  0 #333333; }\n\n#ex1 {\n  text-shadow: 1px 1px  0 cyan, 2px 2px  0 #12f4fa, 3px 3px  0 #24eaf4, 4px 4px  0 #37dfef, 5px 5px  0 #49d4ea, 6px 6px  0 #5bc9e4, 7px 7px  0 #6dbfdf, 8px 8px  0 #80b4da, 9px 9px  0 #92a9d4, 10px 10px  0 #a49fcf, 11px 11px  0 #b694c9, 12px 12px  0 #c889c4, 13px 13px  0 #db7ebf, 14px 14px  0 #ed74b9, 15px 15px  0 hotpink; }\n\n#ex2 {\n  text-shadow: 5px 5px  0 red, 10px 10px  0 #e3001c, 15px 15px  0 #c60039, 20px 20px  0 #aa0055, 25px 25px  0 #8e0071, 30px 30px  0 #71008e, 35px 35px  0 #5500aa, 40px 40px  0 #3900c6, 45px 45px  0 #1c00e3, 50px 50px  0 blue; }\n\n#ex3 {\n  animation: u5f0a9501 1000ms steps(15, end) infinite; }\n\n@keyframes u5f0a9501 {\n  0% {\n    text-shadow: -1px 1px  0 green, -2px 2px  0 #128900, -3px 3px  0 #249200, -4px 4px  0 #379b00, -5px 5px  0 #49a400, -6px 6px  0 #5bad00, -7px 7px  0 #6db600, -8px 8px  0 #80c000, -9px 9px  0 #92c900, -10px 10px  0 #a4d200, -11px 11px  0 #b6db00, -12px 12px  0 #c8e400, -13px 13px  0 #dbed00, -14px 14px  0 #edf600, -15px 15px  0 yellow; }\n  6.66667% {\n    text-shadow: -1px 1px  0 #128900, -2px 2px  0 #249200, -3px 3px  0 #379b00, -4px 4px  0 #49a400, -5px 5px  0 #5bad00, -6px 6px  0 #6db600, -7px 7px  0 #80c000, -8px 8px  0 #92c900, -9px 9px  0 #a4d200, -10px 10px  0 #b6db00, -11px 11px  0 #c8e400, -12px 12px  0 #dbed00, -13px 13px  0 #edf600, -14px 14px  0 yellow, -15px 15px  0 green; }\n  13.33333% {\n    text-shadow: -1px 1px  0 #249200, -2px 2px  0 #379b00, -3px 3px  0 #49a400, -4px 4px  0 #5bad00, -5px 5px  0 #6db600, -6px 6px  0 #80c000, -7px 7px  0 #92c900, -8px 8px  0 #a4d200, -9px 9px  0 #b6db00, -10px 10px  0 #c8e400, -11px 11px  0 #dbed00, -12px 12px  0 #edf600, -13px 13px  0 yellow, -14px 14px  0 green, -15px 15px  0 #128900; }\n  20% {\n    text-shadow: -1px 1px  0 #379b00, -2px 2px  0 #49a400, -3px 3px  0 #5bad00, -4px 4px  0 #6db600, -5px 5px  0 #80c000, -6px 6px  0 #92c900, -7px 7px  0 #a4d200, -8px 8px  0 #b6db00, -9px 9px  0 #c8e400, -10px 10px  0 #dbed00, -11px 11px  0 #edf600, -12px 12px  0 yellow, -13px 13px  0 green, -14px 14px  0 #128900, -15px 15px  0 #249200; }\n  26.66667% {\n    text-shadow: -1px 1px  0 #49a400, -2px 2px  0 #5bad00, -3px 3px  0 #6db600, -4px 4px  0 #80c000, -5px 5px  0 #92c900, -6px 6px  0 #a4d200, -7px 7px  0 #b6db00, -8px 8px  0 #c8e400, -9px 9px  0 #dbed00, -10px 10px  0 #edf600, -11px 11px  0 yellow, -12px 12px  0 green, -13px 13px  0 #128900, -14px 14px  0 #249200, -15px 15px  0 #379b00; }\n  33.33333% {\n    text-shadow: -1px 1px  0 #5bad00, -2px 2px  0 #6db600, -3px 3px  0 #80c000, -4px 4px  0 #92c900, -5px 5px  0 #a4d200, -6px 6px  0 #b6db00, -7px 7px  0 #c8e400, -8px 8px  0 #dbed00, -9px 9px  0 #edf600, -10px 10px  0 yellow, -11px 11px  0 green, -12px 12px  0 #128900, -13px 13px  0 #249200, -14px 14px  0 #379b00, -15px 15px  0 #49a400; }\n  40% {\n    text-shadow: -1px 1px  0 #6db600, -2px 2px  0 #80c000, -3px 3px  0 #92c900, -4px 4px  0 #a4d200, -5px 5px  0 #b6db00, -6px 6px  0 #c8e400, -7px 7px  0 #dbed00, -8px 8px  0 #edf600, -9px 9px  0 yellow, -10px 10px  0 green, -11px 11px  0 #128900, -12px 12px  0 #249200, -13px 13px  0 #379b00, -14px 14px  0 #49a400, -15px 15px  0 #5bad00; }\n  46.66667% {\n    text-shadow: -1px 1px  0 #80c000, -2px 2px  0 #92c900, -3px 3px  0 #a4d200, -4px 4px  0 #b6db00, -5px 5px  0 #c8e400, -6px 6px  0 #dbed00, -7px 7px  0 #edf600, -8px 8px  0 yellow, -9px 9px  0 green, -10px 10px  0 #128900, -11px 11px  0 #249200, -12px 12px  0 #379b00, -13px 13px  0 #49a400, -14px 14px  0 #5bad00, -15px 15px  0 #6db600; }\n  53.33333% {\n    text-shadow: -1px 1px  0 #92c900, -2px 2px  0 #a4d200, -3px 3px  0 #b6db00, -4px 4px  0 #c8e400, -5px 5px  0 #dbed00, -6px 6px  0 #edf600, -7px 7px  0 yellow, -8px 8px  0 green, -9px 9px  0 #128900, -10px 10px  0 #249200, -11px 11px  0 #379b00, -12px 12px  0 #49a400, -13px 13px  0 #5bad00, -14px 14px  0 #6db600, -15px 15px  0 #80c000; }\n  60% {\n    text-shadow: -1px 1px  0 #a4d200, -2px 2px  0 #b6db00, -3px 3px  0 #c8e400, -4px 4px  0 #dbed00, -5px 5px  0 #edf600, -6px 6px  0 yellow, -7px 7px  0 green, -8px 8px  0 #128900, -9px 9px  0 #249200, -10px 10px  0 #379b00, -11px 11px  0 #49a400, -12px 12px  0 #5bad00, -13px 13px  0 #6db600, -14px 14px  0 #80c000, -15px 15px  0 #92c900; }\n  66.66667% {\n    text-shadow: -1px 1px  0 #b6db00, -2px 2px  0 #c8e400, -3px 3px  0 #dbed00, -4px 4px  0 #edf600, -5px 5px  0 yellow, -6px 6px  0 green, -7px 7px  0 #128900, -8px 8px  0 #249200, -9px 9px  0 #379b00, -10px 10px  0 #49a400, -11px 11px  0 #5bad00, -12px 12px  0 #6db600, -13px 13px  0 #80c000, -14px 14px  0 #92c900, -15px 15px  0 #a4d200; }\n  73.33333% {\n    text-shadow: -1px 1px  0 #c8e400, -2px 2px  0 #dbed00, -3px 3px  0 #edf600, -4px 4px  0 yellow, -5px 5px  0 green, -6px 6px  0 #128900, -7px 7px  0 #249200, -8px 8px  0 #379b00, -9px 9px  0 #49a400, -10px 10px  0 #5bad00, -11px 11px  0 #6db600, -12px 12px  0 #80c000, -13px 13px  0 #92c900, -14px 14px  0 #a4d200, -15px 15px  0 #b6db00; }\n  80% {\n    text-shadow: -1px 1px  0 #dbed00, -2px 2px  0 #edf600, -3px 3px  0 yellow, -4px 4px  0 green, -5px 5px  0 #128900, -6px 6px  0 #249200, -7px 7px  0 #379b00, -8px 8px  0 #49a400, -9px 9px  0 #5bad00, -10px 10px  0 #6db600, -11px 11px  0 #80c000, -12px 12px  0 #92c900, -13px 13px  0 #a4d200, -14px 14px  0 #b6db00, -15px 15px  0 #c8e400; }\n  86.66667% {\n    text-shadow: -1px 1px  0 #edf600, -2px 2px  0 yellow, -3px 3px  0 green, -4px 4px  0 #128900, -5px 5px  0 #249200, -6px 6px  0 #379b00, -7px 7px  0 #49a400, -8px 8px  0 #5bad00, -9px 9px  0 #6db600, -10px 10px  0 #80c000, -11px 11px  0 #92c900, -12px 12px  0 #a4d200, -13px 13px  0 #b6db00, -14px 14px  0 #c8e400, -15px 15px  0 #dbed00; }\n  93.33333% {\n    text-shadow: -1px 1px  0 yellow, -2px 2px  0 green, -3px 3px  0 #128900, -4px 4px  0 #249200, -5px 5px  0 #379b00, -6px 6px  0 #49a400, -7px 7px  0 #5bad00, -8px 8px  0 #6db600, -9px 9px  0 #80c000, -10px 10px  0 #92c900, -11px 11px  0 #a4d200, -12px 12px  0 #b6db00, -13px 13px  0 #c8e400, -14px 14px  0 #dbed00, -15px 15px  0 #edf600; }\n  100% {\n    text-shadow: -1px 1px  0 green, -2px 2px  0 #128900, -3px 3px  0 #249200, -4px 4px  0 #379b00, -5px 5px  0 #49a400, -6px 6px  0 #5bad00, -7px 7px  0 #6db600, -8px 8px  0 #80c000, -9px 9px  0 #92c900, -10px 10px  0 #a4d200, -11px 11px  0 #b6db00, -12px 12px  0 #c8e400, -13px 13px  0 #dbed00, -14px 14px  0 #edf600, -15px 15px  0 yellow; } }\n\n#ex4 {\n  text-shadow: 1px 1px  0 purple, 2px 2px  0 #7a007a, 3px 3px  0 #750075, 4px 4px  0 #6f006f, 5px 5px  0 #690069, 6px 6px  0 #640064, 7px 7px  0 #5e005e, 8px 8px  0 #580058, 9px 9px  0 #530053, 10px 10px  0 #4d004d, -1px -1px  0 orangered, -2px -2px  0 #f94300, -3px -3px  0 #f44200, -4px -4px  0 #ee4000, -5px -5px  0 #e83f00, -6px -6px  0 #e33d00, -7px -7px  0 #dd3c00, -8px -8px  0 #d73a00, -9px -9px  0 #d23900, -10px -10px  0 #cc3700; }\n"; });
//# sourceMappingURL=app-bundle.js.map