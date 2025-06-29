package com.challenge.meli.itemservice.repository.impl;
import com.challenge.meli.itemservice.model.Product;
import com.challenge.meli.itemservice.repository.ProductRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.io.InputStream;
import java.util.*;

@Repository
public class InMemoryProductRepository implements ProductRepository {

    private final Map<String, Product> productStore = new HashMap<>();

    @PostConstruct
    public void init() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream is = getClass().getClassLoader().getResourceAsStream("products.json");
            if (is != null) {
                List<Product> products = mapper.readValue(is, new TypeReference<List<Product>>() {});
                for (Product product : products) {
                    productStore.put(product.getId(), product);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public Optional<Product> findById(String id) {
        return Optional.ofNullable(productStore.get(id));
    }
}
