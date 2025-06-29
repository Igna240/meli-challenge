package com.challenge.meli.itemservice.repository.impl;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import com.challenge.meli.itemservice.model.Product;
import org.junit.jupiter.api.BeforeEach;

import java.util.Optional;

class InMemoryProductRepositoryTest {

    private InMemoryProductRepository repository;

    @BeforeEach
    void setUp() {
        repository = new InMemoryProductRepository();
        // Simular el ciclo de vida de Spring para llamar @PostConstruct manualmente
        repository.init();
    }

    @Test
    void findById_shouldReturnProduct_whenProductExists() {
        Optional<Product> optProduct = repository.findById("MLC34729758");

        assertTrue(optProduct.isPresent());
        Product product = optProduct.get();
        assertEquals("MLC34729758", product.getId());
        assertEquals("Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro", product.getTitle());
        assertEquals(299990, product.getPrice());
        assertNotNull(product.getInstallments());
        assertNotNull(product.getShipping());
        assertEquals(15, product.getStock());
        assertEquals("Nuevo", product.getCondition());
        assertEquals(1258, product.getSoldQuantity());
        assertEquals("Samsung Oficial", product.getSeller());
        assertNotNull(product.getImages());
        assertTrue(product.isBestSeller());
        assertTrue(product.isHasFreeReturn());
    }

    @Test
    void findById_shouldReturnEmpty_whenProductDoesNotExist() {
        Optional<Product> optProduct = repository.findById("NO_EXISTE");
        assertFalse(optProduct.isPresent());
    }
}