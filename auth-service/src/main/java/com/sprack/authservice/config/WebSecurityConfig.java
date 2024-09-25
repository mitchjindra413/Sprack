package com.sprack.authservice.config;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@AllArgsConstructor
public class WebSecurityConfig {
    private PasswordEncoder passwordEncoder;
    private CORSCustomizer corsCustomizer;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        corsCustomizer.corsCustomizer(http);
        return http.formLogin(Customizer.withDefaults())
                .authorizeHttpRequests((authorizeHttpRequests) ->
                        authorizeHttpRequests
                                .anyRequest().authenticated()
                )
                .build();
    }

    // TODO: Save to actual database
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withUsername("test").password(passwordEncoder.encode("password")).build();
        UserDetailsManager uds = new InMemoryUserDetailsManager();

        uds.createUser(user);
        return uds;
    }
}
