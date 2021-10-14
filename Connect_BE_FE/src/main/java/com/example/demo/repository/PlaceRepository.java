package com.example.demo.repository;

import com.example.demo.model.PlaceCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<PlaceCar, Integer> {
}
