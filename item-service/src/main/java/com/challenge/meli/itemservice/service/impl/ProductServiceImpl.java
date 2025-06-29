package com.challenge.meli.itemservice.service.impl;

import com.challenge.meli.itemservice.dto.ProductDTO;
import com.challenge.meli.itemservice.model.Product;
import com.challenge.meli.itemservice.repository.ProductRepository;
import com.challenge.meli.itemservice.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public ProductDTO getProductById(String id) {
        Optional<Product> productOpt = productRepository.findById(id);
        if (productOpt.isEmpty()) {
            return null;
        }
        Product product = productOpt.get();
        return ProductDTO.builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .installments(
                        product.getInstallments() == null ? null :
                                ProductDTO.InstallmentsDTO.builder()
                                        .quantity(product.getInstallments().getQuantity())
                                        .amount(product.getInstallments().getAmount())
                                        .hasInterest(product.getInstallments().isHasInterest())
                                        .build()
                )
                .shipping(
                        product.getShipping() == null ? null :
                                ProductDTO.ShippingDTO.builder()
                                        .free(product.getShipping().isFree())
                                        .deliveryTime(product.getShipping().getDeliveryTime())
                                        .build()
                )
                .stock(product.getStock())
                .condition(product.getCondition())
                .soldQuantity(product.getSoldQuantity())
                .seller(product.getSeller())
                .images(product.getImages())
                .isBestSeller(product.isBestSeller())
                .hasFreeReturn(product.isHasFreeReturn())
                .build();
    }
}
