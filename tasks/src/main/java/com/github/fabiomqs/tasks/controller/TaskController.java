package com.github.fabiomqs.tasks.controller;

import com.github.fabiomqs.tasks.domain.Task;
import com.github.fabiomqs.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping( value = {"", "/"})
    public List<Task> listTasks() {
        return taskService.listTasks();
    }

    @GetMapping(path = "/page", params = { "page" })
    public List<Task> listTasksPaginated( @RequestParam("page") int page,
                                 @RequestParam(value = "size", defaultValue= "20") int size) {
        return taskService.listTasks(page, size);
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }
}
