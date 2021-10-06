package com.github.fabiomqs.tasks.repository;

import com.github.fabiomqs.tasks.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
