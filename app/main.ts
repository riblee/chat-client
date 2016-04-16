/**
 * Created by riblee on 4/11/16.
 */
import {bootstrap}    from 'angular2/platform/browser';
import {LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component';
import {provide} from "angular2/core";

bootstrap(AppComponent,[
    provide(LocationStrategy, { useClass: PathLocationStrategy })
]);
