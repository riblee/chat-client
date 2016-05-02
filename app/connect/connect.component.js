System.register(['angular2/core', 'angular2/common', '@angular2-material/input/input', '@angular2-material/card/card', '@angular2-material/button/button', '@angular2-material/toolbar/toolbar', '../rooms/room.service'], function(exports_1, context_1) {
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
    var core_1, common_1, input_1, card_1, button_1, toolbar_1, room_service_1;
    var ConnectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            }],
        execute: function() {
            ConnectComponent = (function () {
                /**
                 * ConnectComponent Constructor.
                 * @param builder
                 * @param _roomService
                 */
                function ConnectComponent(builder, _roomService) {
                    this.builder = builder;
                    this.roomService = _roomService;
                    this.channel = new common_1.Control('', common_1.Validators.compose([
                        common_1.Validators.required,
                        common_1.Validators.minLength(1)
                    ]), this.isConnectedToRoom.bind(this));
                    // TODO. check if nickname is taken
                    this.nickname = new common_1.Control('', common_1.Validators.compose([
                        common_1.Validators.required,
                        common_1.Validators.minLength(1)
                    ]));
                    this.connectForm = builder.group({
                        nickname: this.nickname,
                        channel: this.channel
                    });
                }
                /**
                 * Asynchronous function to check if the user connected to a Room.
                 * @param {Control} control - The Room name to check
                 * @returns {Promise<ValidationResult>} - The result
                 */
                ConnectComponent.prototype.isConnectedToRoom = function (control) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.roomService.getRoomByName(control.value)
                            .then(function (room) {
                            if (!!room) {
                                return resolve({ alreadyConnected: true });
                            }
                            resolve(null);
                        });
                    });
                };
                /**
                 * Connects to a specified Room.
                 */
                ConnectComponent.prototype.connect = function () {
                    this.roomService.connectToRoom(this.connectForm.value.channel, this.connectForm.value.nickname);
                };
                ConnectComponent = __decorate([
                    core_1.Component({
                        selector: 'connect-component',
                        templateUrl: 'app/connect/connect.html',
                        styleUrls: ['app/connect/connect.css'],
                        directives: [
                            input_1.MD_INPUT_DIRECTIVES,
                            common_1.FORM_DIRECTIVES,
                            card_1.MD_CARD_DIRECTIVES,
                            button_1.MdButton,
                            toolbar_1.MdToolbar
                        ],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, room_service_1.RoomService])
                ], ConnectComponent);
                return ConnectComponent;
            }());
            exports_1("ConnectComponent", ConnectComponent);
        }
    }
});
//# sourceMappingURL=connect.component.js.map