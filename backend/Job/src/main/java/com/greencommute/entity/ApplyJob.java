package com.greencommute.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "saved_jobs")
@Entity
public class ApplyJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private User user_id;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "job_id")
    private Job job_id;

    @Column(name = "applied")
    private Integer applied;

    public ApplyJob() {
    }

    public ApplyJob(int id, User user_id, Job job_id, Integer applied) {
        this.id = id;
        this.user_id = user_id;
        this.job_id = job_id;
        this.applied = applied;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser_id() {
        return user_id;
    }

    public void setUser_id(User user_id) {
        this.user_id = user_id;
    }

    public Job getJob_id() {
        return job_id;
    }

    public void setJob_id(Job job_id) {
        this.job_id = job_id;
    }

    public Integer getApplied() {
        return applied;
    }

    public void setApplied(Integer applied) {
        this.applied = applied;
    }

    @Override
    public String toString() {
        return "ApplyJob{" +
                "id=" + id +
                ", user_id=" + user_id +
                ", job_id=" + job_id +
                ", applied=" + applied +
                '}';
    }
}
