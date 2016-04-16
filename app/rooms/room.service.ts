/**
 * Created by riblee on 4/16/16.
 */
import {Injectable} from 'angular2/core';

export class Room {
    constructor(
        public id:number,
        public name:string,
        public nickName:string) { }
}

@Injectable()
export class RoomService {
    getRooms() { return roomsPromise; }
    getRoom(id: number | string) {
        return roomsPromise
            .then(rooms => rooms.filter(r=> r.id === +id)[0]);
    }
}
var ROOMS = [
    new Room(0, 'Room0', 'nick'),
    new Room(1, 'Cats', 'catlov3r'),
    new Room(2, 'Dogs4ever', 'doge')
];
var roomsPromise = Promise.resolve(ROOMS);
