package com.sprack.authservice.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Component
public class CORSCustomizer {
    public void corsCustomizer(HttpSecurity http) throws Exception {
//        http.cors(c -> {
//            CorsConfigurationSource source = s -> {
//                CorsConfiguration cc = new CorsConfiguration();
//                cc.setAllowCredentials(true);
//                cc.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:8079"));
//                cc.setAllowedHeaders(List.of("*"));
//                cc.setAllowedMethods(List.of("*"));
//                return cc;
//            };
//
//            c.configurationSource(source);
//        });
    }
}
