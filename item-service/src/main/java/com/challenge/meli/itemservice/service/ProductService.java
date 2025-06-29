package com.challenge.meli.itemservice.service;

import com.challenge.meli.itemservice.dto.ProductDTO;

public interface ProductService {
    ProductDTO getProductById(String id);
}
