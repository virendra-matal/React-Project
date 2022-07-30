package com.cources.Model;

import javax.persistence.*;

@Entity
@Table(name = "cources")
public class Cources {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String cource;
    @Column(length = 5000)
    private String description;

    public Cources() {
    }

    public Cources(int id, String cource, String description) {
        this.id = id;
        this.cource = cource;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCource() {
        return cource;
    }

    public void setCource(String cource) {
        this.cource = cource;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @Override
    public String toString() {
        return "Cources{" +
                "id=" + id +
                ", cource='" + cource + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
