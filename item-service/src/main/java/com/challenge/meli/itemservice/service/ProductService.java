package com.challenge.meli.itemservice.service;

import com.challenge.meli.itemservice.dto.ProductDTO;

import java.util.Optional;

public interface ProductService {
    ProductDTO getProductById(String id);
}
