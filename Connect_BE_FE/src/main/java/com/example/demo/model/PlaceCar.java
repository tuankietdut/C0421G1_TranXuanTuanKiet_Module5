package com.example.demo.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class , property = "id", scope = Integer.class)
public class PlaceCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @JsonBackReference(value = "placeOne")
//    @JsonIgnoreProperties
//    @JsonIgnore
    @OneToMany(mappedBy = "placeFrom")
    private List<Car> carFrom;

    @JsonBackReference(value = "placeTwo")
//    @JsonIgnoreProperties
//    @JsonIgnore
    @OneToMany(mappedBy = "placeTo")
    private List<Car> carTo;

    public PlaceCar() {
    }

    public PlaceCar(int id, String name, List<Car> carFrom, List<Car> carTo) {
        this.id = id;
        this.name = name;
        this.carFrom = carFrom;
        this.carTo = carTo;
    }

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

    public List<Car> getCarFrom() {
        return carFrom;
    }

    public void setCarFrom(List<Car> carFrom) {
        this.carFrom = carFrom;
    }

    public List<Car> getCarTo() {
        return carTo;
    }

    public void setCarTo(List<Car> carTo) {
        this.carTo = carTo;
    }
}
