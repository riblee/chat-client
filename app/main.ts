/**
 * Created by riblee on 4/11/16.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideDB, DBSchema } from './database.service';

const roomSchema: DBSchema = {
    version: 1,
    name: 'todo_app',
    stores: {
        'rooms': {autoIncrement: true}
    }
};

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    provideDB(roomSchema),
    HTTP_PROVIDERS
]);