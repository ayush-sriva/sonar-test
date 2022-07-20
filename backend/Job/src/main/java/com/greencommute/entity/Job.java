package com.greencommute.entity;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;


@Entity
@Data
@Builder
@Table(name="job")
public class Job {
    public Job() {
    }

    public Job(Integer id,String description, String createdAt, Company company, Skill skill, Location location) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.company = company;
        this.skill = skill;
        this.location = location;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "description")
    private String description;
    @Column(name = "createdat")
    private String createdAt;
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;
    @ManyToOne
    @JoinColumn(name = "loc_id")
    private Location location;
}
