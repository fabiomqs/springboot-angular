import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { NotificationService } from 'src/app/notification/service/notification.service';
import { TaskService } from '../service/task.service';


@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks:Task[] = [];

    constructor(
        private taskService: TaskService,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this.taskService.listTasks().subscribe(
            resp => this.tasks = resp,
            err => this.handleError(err)
        )
        this.taskService.onTaskAdded()
            .subscribe(
                (task: Task) => this.tasks.push(task)
            );
    }

    getDueDateLabel(task: Task){
        return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task: Task) {
        if(event?.target?.checked)
            task.completed = event.target.checked;
        else
            task.completed = !task.completed;
        this.taskService.saveTask(task).subscribe(
            resp => {},
            err => this.handleError(err)
        )
    }

    private handleError(error) {
        console.log(error);
        this.notificationService.error(error.error.message);
    }

}
