package com.greencommute.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@Builder
@Table(name = "saved_jobs")
@Data
@NoArgsConstructor
@Entity
public class SavedJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "job_id",referencedColumnName = "id")
    private Job job;

    @Column(name = "applied")
    private Integer applied;

    public SavedJob(int id, User user, Job job, Integer applied) {
        this.id = id;
        this.user = user;
        this.job = job;
        this.applied = applied;
    }
}