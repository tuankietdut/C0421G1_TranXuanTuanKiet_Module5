package com.example.demo.service;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImp implements CarService {
    @Autowired
    private CarRepository carRepository;
    @Override
    public List<Car> getAll() {
        return this.carRepository.findAll();
    }

    @Override
    public Car saveCar(Car car) {
        return this.carRepository.save(car);
    }

    @Override
    public void deleteCarById(int idCar) {
         this.carRepository.deleteById(idCar);
    }

    @Override
    public Optional<Car> findCarById(int idCar) {
        return this.carRepository.findById(idCar);
    }

    @Override
    public Page<Car> getAllWithPage(Pageable pageable) {
        return this.carRepository.findAll(pageable);
    }
}
