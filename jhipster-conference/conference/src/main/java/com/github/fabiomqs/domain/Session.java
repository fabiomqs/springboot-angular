package com.github.fabiomqs.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Session.
 */
@Entity
@Table(name = "session")
public class Session implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    @NotNull
    @Column(name = "start_date_time", nullable = false)
    private ZonedDateTime startDateTime;

    @NotNull
    @Column(name = "end_date_time", nullable = false)
    private ZonedDateTime endDateTime;

    @ManyToMany(mappedBy = "sessions")
    @JsonIgnoreProperties(value = { "sessions" }, allowSetters = true)
    private Set<Speaker> speakers = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Session id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public Session title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public Session description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ZonedDateTime getStartDateTime() {
        return this.startDateTime;
    }

    public Session startDateTime(ZonedDateTime startDateTime) {
        this.setStartDateTime(startDateTime);
        return this;
    }

    public void setStartDateTime(ZonedDateTime startDateTime) {
        this.startDateTime = startDateTime;
    }

    public ZonedDateTime getEndDateTime() {
        return this.endDateTime;
    }

    public Session endDateTime(ZonedDateTime endDateTime) {
        this.setEndDateTime(endDateTime);
        return this;
    }

    public void setEndDateTime(ZonedDateTime endDateTime) {
        this.endDateTime = endDateTime;
    }

    public Set<Speaker> getSpeakers() {
        return this.speakers;
    }

    public void setSpeakers(Set<Speaker> speakers) {
        if (this.speakers != null) {
            this.speakers.forEach(i -> i.removeSessions(this));
        }
        if (speakers != null) {
            speakers.forEach(i -> i.addSessions(this));
        }
        this.speakers = speakers;
    }

    public Session speakers(Set<Speaker> speakers) {
        this.setSpeakers(speakers);
        return this;
    }

    public Session addSpeakers(Speaker speaker) {
        this.speakers.add(speaker);
        speaker.getSessions().add(this);
        return this;
    }

    public Session removeSpeakers(Speaker speaker) {
        this.speakers.remove(speaker);
        speaker.getSessions().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Session)) {
            return false;
        }
        return id != null && id.equals(((Session) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Session{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", startDateTime='" + getStartDateTime() + "'" +
            ", endDateTime='" + getEndDateTime() + "'" +
            "}";
    }
}
