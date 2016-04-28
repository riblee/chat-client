import {Injectable} from 'angular2/core';

export class Message {
    constructor(public isServer:Boolean,
                public text:String,
                public nickname:String) {
    }
}

@Injectable()
export class MessageService {}