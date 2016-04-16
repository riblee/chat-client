System.register(['angular2/core', 'angular2/router', './home/home.component', './connect/connect.component', './rooms/roomList.component', "./rooms/room.service", "./rooms/roomDetail.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, connect_component_1, roomList_component_1, room_service_1, roomDetail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (connect_component_1_1) {
                connect_component_1 = connect_component_1_1;
            },
            function (roomList_component_1_1) {
                roomList_component_1 = roomList_component_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (roomDetail_component_1_1) {
                roomDetail_component_1 = roomDetail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'chat-app',
                        templateUrl: 'html/layout.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, room_service_1.RoomService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/connect',
                            name: 'Connect',
                            component: connect_component_1.ConnectComponent
                        },
                        {
                            path: '/rooms',
                            name: 'Rooms',
                            component: roomList_component_1.RoomListComponent
                        },
                        {
                            path: '/rooms/:id',
                            name: 'RoomDetail',
                            component: roomDetail_component_1.RoomDetail
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map