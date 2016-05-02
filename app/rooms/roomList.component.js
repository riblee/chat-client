System.register(['angular2/core', "./room.service", "angular2/router", '@angular2-material/list/list'], function(exports_1, context_1) {
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
    var core_1, room_service_1, router_1, list_1;
    var RoomListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            }],
        execute: function() {
            RoomListComponent = (function () {
                function RoomListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                RoomListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Populate Rooms from RoomService.
                    this._service.getRooms().then(function (rooms) { return _this.rooms = rooms; });
                };
                /**
                 * Navigate to RoomDetail view of the selected Room.
                 * @param room
                 */
                RoomListComponent.prototype.onSelect = function (room) {
                    this._router.navigate(['RoomDetail', { id: room.id }]);
                };
                RoomListComponent = __decorate([
                    core_1.Component({
                        selector: 'rooms-component',
                        templateUrl: 'app/rooms/rooms.html',
                        directives: [
                            list_1.MD_LIST_DIRECTIVES,
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, room_service_1.RoomService])
                ], RoomListComponent);
                return RoomListComponent;
            }());
            exports_1("RoomListComponent", RoomListComponent);
        }
    }
});
//# sourceMappingURL=roomList.component.js.map