package com.example.demo.service;

import com.example.demo.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CarService {
    List<Car> getAll();
    Car saveCar(Car car);
    void deleteCarById(int idCar);
    Optional<Car> findCarById(int idCar);
    Page<Car> getAllWithPage(Pageable pageable);
}
