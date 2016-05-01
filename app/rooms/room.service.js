System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Message, Room, RoomService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Message = (function () {
                function Message(isServer, text, nickname) {
                    this.isServer = isServer;
                    this.text = text;
                    this.nickname = nickname;
                }
                return Message;
            }());
            exports_1("Message", Message);
            Room = (function () {
                function Room(id, name, nickName) {
                    this.id = id;
                    this.name = name;
                    this.nickName = nickName;
                    this.messages = [];
                }
                return Room;
            }());
            exports_1("Room", Room);
            RoomService = (function () {
                function RoomService(_router) {
                    var _this = this;
                    this._router = _router;
                    this.nextId = 0;
                    this.rooms = [];
                    this.socket = io('http://localhost:3001');
                    this.socket.on('message', function (_msg) {
                        _this.handleMessage(_msg);
                    });
                }
                RoomService.prototype.getNextId = function () {
                    return this.nextId++;
                };
                RoomService.prototype.handleMessage = function (_message) {
                    var message = new Message(_message.server, _message.message, _message.nickname);
                    this.getRoomByName(_message.room)
                        .then(function (room) {
                        room.messages.push(message);
                    });
                };
                RoomService.prototype.getRooms = function () {
                    return Promise.resolve(this.rooms);
                };
                RoomService.prototype.getRoom = function (id) {
                    return Promise.resolve(this.rooms)
                        .then(function (rooms) { return rooms.filter(function (r) { return r.id === +id; })[0]; });
                };
                RoomService.prototype.getRoomByName = function (name) {
                    return Promise.resolve(this.rooms)
                        .then(function (rooms) { return rooms.filter(function (r) { return r.name === name; })[0]; });
                };
                RoomService.prototype.connectToRoom = function (name, nickname) {
                    var nextId = this.getNextId();
                    this.rooms.push(new Room(nextId, name, nickname));
                    this.socket.emit('connectToRoom', {
                        room: name,
                        nickname: nickname
                    });
                    this._router.navigate(['RoomDetail', { id: nextId }]);
                };
                RoomService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RoomService);
                return RoomService;
            }());
            exports_1("RoomService", RoomService);
        }
    }
});
//# sourceMappingURL=room.service.js.map