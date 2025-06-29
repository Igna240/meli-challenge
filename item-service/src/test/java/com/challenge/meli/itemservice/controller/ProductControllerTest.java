package com.challenge.meli.itemservice.controller;

import org.junit.jupiter.api.Test;

import com.challenge.meli.itemservice.dto.ProductDTO;
import com.challenge.meli.itemservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ProductService productService;

    @Test
    void getProductById_found() throws Exception {
        ProductDTO dto = ProductDTO.builder()
                .id("MLC34729758")
                .title("Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro")
                .price(299990)
                .build();

        when(productService.getProductById("MLC34729758")).thenReturn(dto);

        mockMvc.perform(get("/api/products/MLC34729758")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("MLC34729758"))
                .andExpect(jsonPath("$.title").value("Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro"))
                .andExpect(jsonPath("$.price").value(299990));
    }

    @Test
    void getProductById_notFound() throws Exception {
        when(productService.getProductById("NO_EXISTE")).thenReturn(null);

        mockMvc.perform(get("/api/products/NO_EXISTE")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }
}