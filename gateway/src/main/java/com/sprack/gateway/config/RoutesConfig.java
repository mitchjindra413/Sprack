package com.sprack.gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RoutesConfig {

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("auth-service",
                        predicateSpec -> predicateSpec.path("/oauth2/**")
                                .uri("http://localhost:8080"))
                .route("user-service",
                        predicateSpec -> predicateSpec.path("/api/v1/user/**")
                                .uri("http://localhost:8081"))
                .build();
    }
}
