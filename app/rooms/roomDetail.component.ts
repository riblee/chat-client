/**
 * Created by riblee on 4/16/16.
 */
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from "angular2/router";
import {RoomService, Room} from "./room.service";

@Component({
    selector: 'room-detail-component',
    templateUrl: '../html/roomDetail.html'
})

export class RoomDetail implements OnInit  {
    room: Room;
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service:RoomService){}
    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getRoom(id).then(room => this.room = room);
    }
    goToRooms() {
        // Like <a [routerLink]="['Rooms']">Rooms</a>
        this._router.navigate(['Rooms']);
    }
}