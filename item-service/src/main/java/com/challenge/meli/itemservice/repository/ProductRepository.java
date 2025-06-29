package com.challenge.meli.itemservice.repository;

import com.challenge.meli.itemservice.model.Product;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository {
    Optional<Product> findById(String id);
}
