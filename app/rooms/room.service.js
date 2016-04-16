System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Room, RoomService, ROOMS, roomsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Room = (function () {
                function Room(id, name, nickName) {
                    this.id = id;
                    this.name = name;
                    this.nickName = nickName;
                }
                return Room;
            }());
            exports_1("Room", Room);
            RoomService = (function () {
                function RoomService() {
                }
                RoomService.prototype.getRooms = function () { return roomsPromise; };
                RoomService.prototype.getRoom = function (id) {
                    return roomsPromise
                        .then(function (rooms) { return rooms.filter(function (r) { return r.id === +id; })[0]; });
                };
                RoomService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RoomService);
                return RoomService;
            }());
            exports_1("RoomService", RoomService);
            ROOMS = [
                new Room(0, 'Room0', 'nick'),
                new Room(1, 'Cats', 'catlov3r'),
                new Room(2, 'Dogs4ever', 'doge')
            ];
            roomsPromise = Promise.resolve(ROOMS);
        }
    }
});
//# sourceMappingURL=room.service.js.map