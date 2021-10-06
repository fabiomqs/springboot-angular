package com.github.fabiomqs.tasks.service;

import com.github.fabiomqs.tasks.domain.Task;

import java.util.List;

public interface TaskService {
    List<Task> listTasks();

    List<Task> listTasks(int page, int size);

    Task saveTask(Task task);
}
