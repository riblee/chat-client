import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {ConnectComponent} from './connect/connect.component';
import {RoomListComponent} from './rooms/roomList.component';
import {RoomService} from "./rooms/room.service";
import {RoomDetail} from "./rooms/roomDetail.component";

@Component({
    selector: 'chat-app',
    templateUrl: 'html/layout.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, RoomService]
})

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/connect',
        name: 'Connect',
        component: ConnectComponent
    },
    {
        path: '/rooms',
        name: 'Rooms',
        component: RoomListComponent
    },
    {
        path: '/rooms/:id',
        name: 'RoomDetail',
        component: RoomDetail
    }
])

export class AppComponent {}
