/**
 * Created by riblee on 4/11/16.
 */
import { Component } from 'angular2/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from 'angular2/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MdButton} from '@angular2-material/button/button';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

import {RoomService} from '../rooms/room.service';

@Component({
    selector: 'connect-component',
    templateUrl: 'app/connect/connect.html',
    styleUrls: ['app/connect/connect.css'],
    directives: [
        MD_INPUT_DIRECTIVES,
        FORM_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MdButton,
        MdToolbar
    ],
})

export class ConnectComponent {
    connectForm: ControlGroup;
    channel: Control;
    nickname: Control;
    roomService: RoomService;

    /**
     * ConnectComponent Constructor.
     * @param builder
     * @param _roomService
     */
    constructor(private builder: FormBuilder, _roomService: RoomService) {
        this.roomService = _roomService;
        // TODO: add async validator to check if connected to the given room
        this.channel = new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(1)
        ]));
        // TODO. check if nickname is taken
        this.nickname = new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(1)
        ]));

        this.connectForm = builder.group({
            nickname: this.nickname,
            channel: this.channel
        });
    }

    /**
     * Connects a specified Room.
     */
    connect() {
        this.roomService.connectToRoom(this.connectForm.value.channel, this.connectForm.value.nickname);
    }
}