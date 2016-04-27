/**
 * Created by riblee on 4/11/16.
 */
import { Component } from 'angular2/core';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
    selector: 'connect-component',
    templateUrl: 'app/connect/connect.html',
    styleUrls: ['app/connect/connect.css'],
    directives: [
        MD_INPUT_DIRECTIVES,
        MdButton,
        MdToolbar
    ],
})

export class ConnectComponent { }