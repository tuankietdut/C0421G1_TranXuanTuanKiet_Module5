package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class PlaceCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @JsonBackReference
    @OneToMany(mappedBy = "placeFrom")
    private Set<Car> carFrom;

    @JsonBackReference
    @OneToMany(mappedBy = "placeTo")
    private Set<Car> carTo;

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

    public Set<Car> getCarFrom() {
        return carFrom;
    }

    public void setCarFrom(Set<Car> carFrom) {
        this.carFrom = carFrom;
    }

    public Set<Car> getCarTo() {
        return carTo;
    }

    public void setCarTo(Set<Car> carTo) {
        this.carTo = carTo;
    }
}
