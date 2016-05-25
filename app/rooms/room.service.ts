/**
 * Created by riblee on 4/16/16.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Database, provideDB, DBSchema} from '../database.service';

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
                public nickName:string,
                public hasNewMessage:boolean) {
        this.messages = [];
        this.hasNewMessage = false;
    }
}

@Injectable()
export class RoomService {
    private nextId;
    private rooms;
    private socket;

    /**
     * Auto-increment Room id generator.
     * @returns {number} - Unique Room id.
     */
    private getNextId() {
        return this.nextId++;
    }

    /**
     * The Message Event handler.
     * @param {object} _message - The Message object from the Server.
     */
    private handleMessage(_message:any) {
        // Create a Message with the information from Server.
        let message = new Message(_message.server, _message.message, _message.nickname);

        // Get the Room
        this.getRoomByName(_message.room)
            .then(room => {
                // Add the Message to it.
                // Note: Checking the existence of the Room is unnecessary,
                // because the Server architecture (Clients separated by Rooms).
                room.messages.push(message);
                room.hasNewMessage = true;

                // Only vibrate when the sender is not the user
                if (_message.nickname !== room.nickName) {
                    window.navigator.vibrate(200);
                }
            });
    }

    /**
     * RoomService Constructor.
     * @param _router
     * @param db
     */
    constructor(private _router:Router,
                private db: Database) {
        this.nextId = 0;
        this.rooms = [];
        // this.db.getAll
        this.socket = io('http://chat.rjd.hu:3005');
        this.socket.on('message', _msg => {
            // TODO: apply?
            this.handleMessage(_msg);
        });
    }

    /**
     * Returns the Rooms
     * @returns {Promise<Room>} - The Rooms.
     */
    getRooms() {
        return Promise.resolve(this.rooms);
    }

    /**
     * Returns a Room with the specified id.
     * @param {number} id - The id of the Room.
     * @returns {Promise<Room>|Promise<undefined>} - The room with the given id or undefined.
     */
    getRoom(id:number | string) {
        return Promise.resolve(this.rooms)
            .then(rooms => rooms.filter(r=> r.id === +id)[0]);
    }

    /**
     * Returns a Room with the specified name.
     * @param {string} name - The name of the Room.
     * @returns {Promise<Room>|Promise<undefined>} - The room with the given name or undefined.
     */
    getRoomByName(name:string) {
        return Promise.resolve(this.rooms)
            .then(rooms => rooms.filter(r=> r.name === name)[0]);
    }

    /**
     * Send a connect request to a specified room with nickname.
     * @param {string} name - The Room.
     * @param {string} nickname - The user's name in the  Room.
     */
    connectToRoom(name:string, nickname:string) {
        let nextId = this.getNextId();
        this.rooms.push(new Room(nextId, name, nickname, false));
        // this.db.insert('rooms', [{id: nextId, name, nickname, hasNewMessage: false}])
        //     .subscribe(
        //         rec => console.log(rec),
        //         err => console.error(err),
        //         () => console.log('inserted room')
        //     );
        this.socket.emit('connectToRoom', {
            room: name,
            nickname: nickname
        });
        this._router.navigate(['RoomDetail', {id: nextId}]);
    }

    /**
     * Send a Message to a room specified by it's id.
     * @param {number} id - The Room's id.
     * @param {string} message - The Message.
     */
    sendMessage(id:number, message:string) {
        this.getRoom(id)
            .then(room => {
                this.socket.emit('message', {
                    room: room.name,
                    message: message
                });
            });
    }
}
