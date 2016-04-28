/**
 * Created by riblee on 4/16/16.
 */
import {Injectable} from 'angular2/core';
import {Router} from "angular2/router";

export class Message {
    constructor(
        public isServer:boolean,
        public text:string,
        public nickname:string) { }
}

export class Room {
    public messages:Message[];
    constructor(
        public id:number,
        public name:string,
        public nickName:string
    ) {
        this.messages = [];
    }
}

@Injectable()
export class RoomService {
    private nextId;
    private rooms;
    private getNextId() {
        return this.nextId++;
    }
    constructor(private _router: Router) {
        this.nextId = 0;
        this.rooms = [];
    }
    getRooms() { return Promise.resolve(this.rooms); }
    getRoom(id: number | string) {
        return Promise.resolve(this.rooms)
            .then(rooms => rooms.filter(r=> r.id === +id)[0]);
    }
    connectToRoom(name:string, nickname:string) {
        let nextId = this.getNextId();
        this.rooms.push(new Room(nextId, name, nickname));
        // TODO: remove
        // TODO: add Message method
        this.getRoom(nextId).then(room => room.messages.push(new Message(false, 'Sample Text', 'Test user')));
        this._router.navigate( ['RoomDetail', { id: nextId }] );
    }
}
