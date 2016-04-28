System.register(['angular2/core', "angular2/router", "./room.service", '@angular2-material/button/button', '@angular2-material/list/list', '@angular2-material/toolbar/toolbar'], function(exports_1, context_1) {
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
    var core_1, router_1, room_service_1, button_1, list_1, toolbar_1;
    var RoomDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            }],
        execute: function() {
            RoomDetail = (function () {
                function RoomDetail(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                RoomDetail.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getRoom(id).then(function (room) { return _this.room = room; });
                };
                RoomDetail.prototype.goToRooms = function () {
                    // Like <a [routerLink]="['Rooms']">Rooms</a>
                    this._router.navigate(['Rooms']);
                };
                RoomDetail = __decorate([
                    core_1.Component({
                        selector: 'room-detail-component',
                        templateUrl: 'app/rooms/roomDetail.html',
                        directives: [
                            list_1.MD_LIST_DIRECTIVES,
                            toolbar_1.MdToolbar,
                            button_1.MdButton
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, room_service_1.RoomService])
                ], RoomDetail);
                return RoomDetail;
            }());
            exports_1("RoomDetail", RoomDetail);
        }
    }
});
//# sourceMappingURL=roomDetail.component.js.map