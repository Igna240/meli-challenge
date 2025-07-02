package com.challenge.meli.itemservice.model;


import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
public class Product {

    @Id
    private String id;
    private String title;
    private int price;
    private Installments installments;
    private Shipping shipping;
    private int stock;
    private String condition;
    private int soldQuantity;
    private String seller;
    private List<String> images;
    private boolean bestSeller;
    private boolean hasFreeReturn;
    private boolean hasDiscount;
    private int percentageDiscount;

    @Data
    public static class Installments {
        private int quantity;
        private int amount;
        private boolean hasInterest;
    }

    @Data
    public static class Shipping {
        private boolean free;
        private String deliveryTime;
    }
}
