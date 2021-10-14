package com.example.demo.service;

import com.example.demo.model.PlaceCar;
import com.example.demo.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PlaceServiceImp implements PlaceService {
    @Autowired
    private PlaceRepository placeRepository;
    @Override
    public List<PlaceCar> getAll() {
        return this.placeRepository.findAll();
    }
}
