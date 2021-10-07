import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { NotificationService } from 'src/app/notification/service/notification.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(
        private taskService: TaskService,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
    }

    onTaskAdd(event) {
        let task = new Task(event.target.value, this.getTodayAsString());
        this.taskService.saveTask(task).subscribe(
            (newTask: Task) => {
                this.addTaskValue = '';
                this.taskService.emitTask(newTask);
            },
            err => this.handleError(err)
        )
    }

    getTodayAsString() {
        let today = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        return mm + '/' + dd + '/' + yyyy;
    }

    private handleError(error) {
        console.log(error);
        this.notificationService.error(error.error.message);
    }

}
