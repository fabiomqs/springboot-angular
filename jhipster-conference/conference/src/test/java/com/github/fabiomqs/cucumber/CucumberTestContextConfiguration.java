package com.github.fabiomqs.cucumber;

import com.github.fabiomqs.ConferenceApp;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@SpringBootTest(classes = ConferenceApp.class)
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
