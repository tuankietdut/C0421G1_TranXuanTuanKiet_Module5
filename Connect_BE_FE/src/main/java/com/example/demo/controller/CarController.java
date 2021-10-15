package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.model.PlaceCar;
import com.example.demo.service.CarService;
import com.example.demo.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("car")
@CrossOrigin(origins = "*")
public class CarController {
    @Autowired
    private CarService carService;

    @Autowired
    private PlaceService placeService;



    @GetMapping("/list")
    public ResponseEntity<Page<Car>>  getAll(@PageableDefault(value = 2) Pageable pageable){
        Page<Car> carPage = this.carService.getAllWithPage(pageable);
        return new ResponseEntity<>(carPage, HttpStatus.OK) ;
    }

    @GetMapping("/place")
    public ResponseEntity<List<PlaceCar>>  getAllPlace(){
        return new ResponseEntity<>(this.placeService.getAll(), HttpStatus.OK) ;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> findById(@PathVariable("id") int idCar){
        Optional<Car> carOptional = this.carService.findCarById(idCar);
        if (!carOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carOptional.get(), HttpStatus.OK);
    }

    @PutMapping(value = "/edit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> updateCar(@RequestBody Car car){
       Car updateCar = this.carService.saveCar(car);
        return new ResponseEntity<>(updateCar , HttpStatus.OK) ;
    }

    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> createCar(@RequestBody Car car){
        Car newCar = this.carService.saveCar(car);
        return new ResponseEntity<>(newCar, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable("id") int idCar){
        this.carService.deleteCarById(idCar);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
