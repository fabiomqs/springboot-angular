import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';
import { APIURL } from 'src/app/tokens/tokens';


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private _onTaskAdded = new EventEmitter<Task>();

    constructor(
        private http:HttpClient,
        @Inject(APIURL) private apiUrl: string
    ) { }

    listTasks():Observable<Task[]> {
        return this.http
            .get<Task[]>(`${this.apiUrl}/api/tasks`)
    }

    saveTask(task: Task):Observable<Task> {
        return this.http
            .post<Task>(`${this.apiUrl}/api/tasks/save`, task)
    }

    emitTask(task: Task) {
        this._onTaskAdded.emit(task);
    }

    onTaskAdded() {
        return this._onTaskAdded;
    }
}
