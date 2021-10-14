package com.example.demo.controller;

import com.example.demo.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {
    @Autowired
    private CarService carService;

    @GetMapping("/test")
    public ModelAndView getAllTest(){
        return new ModelAndView("home", "listCar",this.carService.getAll());
    }
}
