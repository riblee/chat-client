import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MdButton} from '@angular2-material/button/button';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';

import {HomeComponent} from './home/home.component';
import {ConnectComponent} from './connect/connect.component';
import {RoomListComponent} from './rooms/roomList.component';
import {RoomService} from "./rooms/room.service";
import {RoomDetail} from "./rooms/roomDetail.component";

@Component({
    selector: 'chat-app',
    templateUrl: 'app/layout.html',
    directives: [
        ROUTER_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdButton,
        MdToolbar
    ],
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
