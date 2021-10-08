package com.github.fabiomqs.service.mapper;

import com.github.fabiomqs.domain.*;
import com.github.fabiomqs.service.dto.PostDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PostMapper extends EntityMapper<PostDTO, Post> {}
