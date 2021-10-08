package com.github.fabiomqs.service.mapper;

import com.github.fabiomqs.domain.*;
import com.github.fabiomqs.service.dto.TaskDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Task} and its DTO {@link TaskDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TaskMapper extends EntityMapper<TaskDTO, Task> {}
