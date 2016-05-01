/**
 * Created by riblee on 4/16/16.
 */
import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

declare var io:any;

export class Message {
    constructor(public isServer:boolean,
                public text:string,
                public nickname:string) {}
}

export class Room {
    public messages:Message[];

    constructor(public id:number,
                public name:string,
                public nickName:string) {
        this.messages = [];
    }
}

@Injectable()
export class RoomService {
    private nextId;
    private rooms;
    private socket;

    private getNextId() {
        return this.nextId++;
    }

    private handleMessage(_message:any) {
        let message = new Message(_message.server, _message.message, _message.nickname);
        this.getRoomByName(_message.room)
            .then(room => {
                room.messages.push(message);
            });
    }

    constructor(private _router:Router) {
        this.nextId = 0;
        this.rooms = [];
        this.socket = io('http://chat.rjd.hu:3005');
        this.socket.on('message', _msg => {
            // TODO: apply?
            this.handleMessage(_msg);
        });
    }

    getRooms() {
        return Promise.resolve(this.rooms);
    }

    getRoom(id:number | string) {
        return Promise.resolve(this.rooms)
            .then(rooms => rooms.filter(r=> r.id === +id)[0]);
    }

    getRoomByName(name:number | string) {
        return Promise.resolve(this.rooms)
            .then(rooms => rooms.filter(r=> r.name === name)[0]);
    }

    connectToRoom(name:string, nickname:string) {
        let nextId = this.getNextId();
        this.rooms.push(new Room(nextId, name, nickname));
        this.socket.emit('connectToRoom', {
            room: name,
            nickname: nickname
        });
        this._router.navigate(['RoomDetail', {id: nextId}]);
    }

    sendMessage(id: number, message:string){
        this.getRoom(id)
            .then(room => {
                this.socket.emit('message', {
                    room: room.name,
                    message: message
                });
            });
    }
}
