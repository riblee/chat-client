System.register(['@angular/platform-browser-dynamic', '@angular/http', './database.service', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, database_service_1, app_component_1;
    var roomSchema;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (database_service_1_1) {
                database_service_1 = database_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            roomSchema = {
                version: 1,
                name: 'todo_app',
                stores: {
                    'rooms': { autoIncrement: true }
                }
            };
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                database_service_1.provideDB(roomSchema),
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map