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
    private nextId;
    private rooms;
    constructor() {
        this.nextId = 0;
        this.rooms = [];
    }
    private getNextId() {
        return this.nextId++;
    }
    getRooms() { return Promise.resolve(this.rooms); }
    getRoom(id: number | string) {
        return Promise.resolve(this.rooms)
            .then(rooms => rooms.filter(r=> r.id === +id)[0]);
    }
    connectToRoom(name, nickname) {
        this.rooms.push(new Room(this.getNextId(), name, nickname));
    }
}
