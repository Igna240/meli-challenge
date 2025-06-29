package com.challenge.meli.itemservice.service.impl;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import com.challenge.meli.itemservice.dto.ProductDTO;
import com.challenge.meli.itemservice.model.Product;
import com.challenge.meli.itemservice.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Mockito.*;

class ProductServiceImplTest {

    private ProductRepository productRepository;
    private ProductServiceImpl productService;

    @BeforeEach
    void setUp() {
        productRepository = mock(ProductRepository.class);
        productService = new ProductServiceImpl(productRepository);
    }

    @Test
    void getProductById_shouldReturnDTO_whenProductExists() {
        // Arrange
        Product.Installments installments = new Product.Installments();
        installments.setQuantity(12);
        installments.setAmount(24999);
        installments.setHasInterest(false);

        Product.Shipping shipping = new Product.Shipping();
        shipping.setFree(true);
        shipping.setDeliveryTime("mañana");

        Product product = new Product();
        product.setId("MLC34729758");
        product.setTitle("Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro");
        product.setPrice(299990);
        product.setInstallments(installments);
        product.setShipping(shipping);
        product.setStock(15);
        product.setCondition("Nuevo");
        product.setSoldQuantity(1258);
        product.setSeller("Samsung Oficial");
        product.setImages(Arrays.asList("img1", "img2"));
        product.setBestSeller(true);
        product.setHasFreeReturn(true);

        when(productRepository.findById("MLC34729758")).thenReturn(Optional.of(product));

        // Act
        ProductDTO dto = productService.getProductById("MLC34729758");

        // Assert
        assertNotNull(dto);
        assertEquals("MLC34729758", dto.getId());
        assertEquals("Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro", dto.getTitle());
        assertEquals(299990, dto.getPrice());
        assertNotNull(dto.getInstallments());
        assertEquals(12, dto.getInstallments().getQuantity());
        assertEquals(24999, dto.getInstallments().getAmount());
        assertFalse(dto.getInstallments().isHasInterest());
        assertNotNull(dto.getShipping());
        assertTrue(dto.getShipping().isFree());
        assertEquals("mañana", dto.getShipping().getDeliveryTime());
        assertEquals(15, dto.getStock());
        assertEquals("Nuevo", dto.getCondition());
        assertEquals(1258, dto.getSoldQuantity());
        assertEquals("Samsung Oficial", dto.getSeller());
        assertEquals(2, dto.getImages().size());
        assertTrue(dto.isBestSeller());
        assertTrue(dto.isHasFreeReturn());
    }

    @Test
    void getProductById_shouldReturnNull_whenProductNotFound() {
        when(productRepository.findById("NO_EXISTE")).thenReturn(Optional.empty());

        ProductDTO dto = productService.getProductById("NO_EXISTE");
        assertNull(dto);
    }
}