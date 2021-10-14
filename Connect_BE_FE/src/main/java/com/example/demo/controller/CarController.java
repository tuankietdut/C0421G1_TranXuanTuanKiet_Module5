package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.model.PlaceCar;
import com.example.demo.service.CarService;
import com.example.demo.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<List<Car>>  getAll(){
        System.out.println("LALALALA");
        return new ResponseEntity<>(this.carService.getAll(), HttpStatus.OK) ;
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

    @PutMapping(value = "/edit", consumes ="application/json;charset=UTF-8" , produces ="application/json; charset=UTF-8")
    public ResponseEntity<Car> updateCar(@RequestBody Car car){
        System.out.println(car);
        return new ResponseEntity<>(this.carService.saveCar(car), HttpStatus.OK) ;
    }

    @PostMapping("/create")
    public void createCar(@RequestBody Car car){
        this.carService.saveCar(car);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable("id") int idCar){
        this.carService.deleteCarById(idCar);
    }
}
