export class Task {
    id: number;
    name: string;
    dueDate: string;
    completed: boolean;

    constructor(name: string, dueDate: string) {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
    }
}