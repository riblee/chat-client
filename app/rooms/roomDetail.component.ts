/**
 * Created by riblee on 4/16/16.
 */
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from "angular2/router";
import {RoomService, Room} from "./room.service";
import {MdButton} from '@angular2-material/button/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from 'angular2/common';

@Component({
    selector: 'room-detail-component',
    templateUrl: 'app/rooms/roomDetail.html',
    directives: [
        MD_LIST_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        FORM_DIRECTIVES,
        MdToolbar,
        MdButton
    ],
})

export class RoomDetail implements OnInit {
    room:Room;
    messageForm:ControlGroup;
    message:Control;

    /**
     * RoomDetail Constructor.
     * @param _router
     * @param _routeParams
     * @param _roomService
     * @param builder
     */
    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _roomService:RoomService,
                private builder: FormBuilder) {
        // Add validators to input field
        this.message = new Control('', Validators.compose([
            Validators.required,
            Validators.minLength(1)
        ]));

        // Create a form from input field
        this.messageForm = builder.group({
            message: this.message
        });
    }

    ngOnInit() {
        // Get the Room to display it
        let id = this._routeParams.get('id');
        this._roomService.getRoom(id).then(room => this.room = room);
    }

    /**
     * Navigate back to RoomList.
     */
    goToRooms() {
        // Like <a [routerLink]="['Rooms']">Rooms</a>
        this._router.navigate(['Rooms']);
    }

    /**
     * Form submit handler.
     * Send a Message to the Room with id.
     */
    send() {
        // Send message to server
        this._roomService.sendMessage(parseInt(this._routeParams.get('id')), this.messageForm.value.message);

        // Reset the form
        this.message.updateValue('');
    }
}