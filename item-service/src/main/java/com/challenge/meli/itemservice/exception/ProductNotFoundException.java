package com.challenge.meli.itemservice.exception;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String id) {
        super("Producto con id " + id + " no encontrado");
    }
}
