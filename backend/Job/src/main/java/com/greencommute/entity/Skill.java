
package com.greencommute.entity;
import javax.persistence.*;

@Entity
@Table(name = "skill")
public class Skill {
    public Skill() {
    }

    public Skill(int id, String skillName) {
        this.id = id;
        this.skillName = skillName;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "skill")
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
