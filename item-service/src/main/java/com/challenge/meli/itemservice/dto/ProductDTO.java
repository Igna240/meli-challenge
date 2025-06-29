package com.challenge.meli.itemservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {
    private String id;
    private String title;
    private int price;
    private InstallmentsDTO installments;
    private ShippingDTO shipping;
    private int stock;
    private String condition;
    private int soldQuantity;
    private String seller;
    private List<String> images;
    @JsonProperty(value = "isBestSeller")
    private boolean isBestSeller;
    private boolean hasFreeReturn;

    @Data
    @Builder
    public static class InstallmentsDTO {
        private int quantity;
        private int amount;
        private boolean hasInterest;
    }

    @Data
    @Builder
    public static class ShippingDTO {
        private boolean free;
        private String deliveryTime;
    }
}
