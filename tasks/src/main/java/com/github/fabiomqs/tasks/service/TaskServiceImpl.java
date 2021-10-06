package com.github.fabiomqs.tasks.service;

import com.github.fabiomqs.tasks.domain.Task;
import com.github.fabiomqs.tasks.repository.TaskRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> listTasks() {
        return taskRepository.findAll(Sort.by(Sort.Direction.ASC, "dueDate"));
    }

    @Override
    public List<Task> listTasks(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "dueDate"));
        Page<Task> pageTask = taskRepository.findAll(pageable);
        return pageTask.getContent();
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }
}
