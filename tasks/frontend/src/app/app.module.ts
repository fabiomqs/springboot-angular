import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

import { NotificationModule } from './notification/notification.module';
import { FormsModule } from '@angular/forms';
import { APIURL, LOGURL, PAGESIZE } from './tokens/tokens';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TasksAddComponent,
        TasksListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NotificationModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        {provide: APIURL, useValue: environment.apiUrl},
        {provide: LOGURL, useValue: environment.logUrl},
        {provide: PAGESIZE, useValue: environment.pageSize}, 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
