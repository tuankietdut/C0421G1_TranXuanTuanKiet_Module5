package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Target;

import javax.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String typeCar;
    private String nameGarage;

    @JsonManagedReference(value = "placeFrom")
    @ManyToOne(targetEntity = PlaceCar.class)
    @JoinColumn(referencedColumnName = "id")
    private PlaceCar placeFrom;

    @JsonManagedReference(value = "placeTo")
    @ManyToOne(targetEntity = PlaceCar.class)
    @JoinColumn(referencedColumnName = "id")
    private PlaceCar placeTo;

    private String phone;
    private String email;
    private String timeStart;
    private String timeEnd;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTypeCar() {
        return typeCar;
    }

    public void setTypeCar(String typeCar) {
        this.typeCar = typeCar;
    }

    public String getNameGarage() {
        return nameGarage;
    }

    public void setNameGarage(String nameGarage) {
        this.nameGarage = nameGarage;
    }

    public PlaceCar getPlaceFrom() {
        return placeFrom;
    }

    public void setPlaceFrom(PlaceCar placeFrom) {
        this.placeFrom = placeFrom;
    }

    public PlaceCar getPlaceTo() {
        return placeTo;
    }

    public void setPlaceTo(PlaceCar placeTo) {
        this.placeTo = placeTo;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }
}
