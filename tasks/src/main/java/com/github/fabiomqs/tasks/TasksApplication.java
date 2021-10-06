package com.github.fabiomqs.tasks;

import com.github.fabiomqs.tasks.domain.Task;
import com.github.fabiomqs.tasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(TaskService taskService) {
//		return args -> {
//			taskService.saveTask(Task.builder().name("Create Spring Boot Application")
//					.dueDate(LocalDate.now()).completed(true).build());
//			taskService.saveTask(Task.builder().name("Create Spring Project Packages")
//					.dueDate(LocalDate.now().plus(1, ChronoUnit.DAYS))
//					.completed(false).build());
//			taskService.saveTask(Task.builder().name("Create Task Domain Class")
//					.dueDate(LocalDate.now().plus(3, ChronoUnit.DAYS))
//					.completed(false).build());
//			taskService.saveTask(Task.builder().name("Create Service and repository Classes")
//					.dueDate(LocalDate.now().plus(5, ChronoUnit.DAYS))
//					.completed(false).build());
//			taskService.saveTask(Task.builder().name("Create Command line runner to load data")
//					.dueDate(LocalDate.now().plus(8, ChronoUnit.DAYS))
//					.completed(false).build());
//			taskService.saveTask(Task.builder().name("Create the required configuration properties")
//					.dueDate(LocalDate.now().plus(10, ChronoUnit.DAYS))
//					.completed(false).build());
//			taskService.saveTask(Task.builder().name("Run the Spring Boot Application")
//					.dueDate(LocalDate.now().plus(12, ChronoUnit.DAYS))
//					.completed(false).build());
//			taskService.saveTask(Task.builder().name("Check MySql for the initial data")
//					.dueDate(LocalDate.now().plus(13, ChronoUnit.DAYS))
//					.completed(false).build());
//		};
//	}
}
