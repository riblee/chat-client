/**
 * Created by riblee on 4/11/16.
 */
import {Component} from '@angular/core';
import {Room, RoomService} from "./room.service";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';

@Component({
    selector: 'rooms-component',
    templateUrl: 'app/rooms/rooms.html',
    directives: [
        MD_LIST_DIRECTIVES,
        ROUTER_DIRECTIVES
    ],
})

export class RoomListComponent {
    rooms:Room[];

    constructor(private _router:Router,
                private _service:RoomService) {}

    ngOnInit() {
        // Populate Rooms from RoomService.
        this._service.getRooms().then(rooms => this.rooms = rooms)
    }

    /**
     * Navigate to RoomDetail view of the selected Room.
     * @param room
     */
    onSelect(room:Room) {
        this._service.getRoom(room.id)
            .then(room => {
                room.hasNewMessage = false;
                this._router.navigate(['RoomDetail', {id: room.id}]);
            });
    }
}