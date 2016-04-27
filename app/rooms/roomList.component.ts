/**
 * Created by riblee on 4/11/16.
 */
import {Component} from 'angular2/core';
import {Room, RoomService} from "./room.service";
import {Router} from "angular2/router";
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';

@Component({
    selector: 'rooms-component',
    templateUrl: 'app/rooms/rooms.html',
    directives: [
        MD_LIST_DIRECTIVES,
    ],
})

export class RoomListComponent {
    rooms: Room[];
    constructor(
        private _router: Router,
        private _service: RoomService) { }
    ngOnInit() {
        this._service.getRooms().then(rooms => this.rooms = rooms)
    }
    onSelect(room: Room) {
        this._router.navigate( ['RoomDetail', { id: room.id }] );
    }
}