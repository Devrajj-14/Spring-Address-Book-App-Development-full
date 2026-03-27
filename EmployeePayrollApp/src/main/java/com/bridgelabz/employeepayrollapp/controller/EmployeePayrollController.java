package com.bridgelabz.employeepayrollapp.controller;

import com.bridgelabz.employeepayrollapp.dto.EmployeePayrollDTO;
import com.bridgelabz.employeepayrollapp.model.EmployeePayrollData;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * UC3: Employee Payroll REST Controller (Updated with DTO and Model)
 * Accepts EmployeePayrollDTO as request body and returns EmployeePayrollData model.
 */
@RestController
@RequestMapping("/employeepayrollservice")
public class EmployeePayrollController {

    /**
     * GET all employees
     * curl localhost:8080/employeepayrollservice/ -w "\n"
     */
    @GetMapping("/")
    public List<EmployeePayrollData> getEmployeePayrollData() {
        // Returning a sample list — actual list storage comes in UC5
        List<EmployeePayrollData> list = new ArrayList<>();
        list.add(new EmployeePayrollData(1L, "Sample Employee", 5000.0));
        return list;
    }

    /**
     * GET employee by ID
     * curl localhost:8080/employeepayrollservice/get/1 -w "\n"
     */
    @GetMapping("/get/{id}")
    public EmployeePayrollData getEmployeePayrollDataById(@PathVariable long id) {
        return new EmployeePayrollData(id, "Employee-" + id, 3000.0);
    }

    /**
     * POST create new employee — accepts DTO, returns Model
     * curl -X POST -H "Content-Type: application/json"
     *      -d '{"name":"Lisa","salary":2000}'
     *      "http://localhost:8080/employeepayrollservice/create" -w "\n"
     */
    @PostMapping("/create")
    public EmployeePayrollData addEmployeePayrollData(@RequestBody EmployeePayrollDTO employeePayrollDTO) {
        // Create model from DTO (ID will be managed by service in UC5)
        return new EmployeePayrollData(1L, employeePayrollDTO.name, employeePayrollDTO.salary);
    }

    /**
     * PUT update employee — accepts DTO, returns updated Model
     * curl -X PUT -H "Content-Type: application/json"
     *      -d '{"name":"Lisa","salary":2000}'
     *      "http://localhost:8080/employeepayrollservice/update" -w "\n"
     */
    @PutMapping("/update")
    public EmployeePayrollData updateEmployeePayrollData(@RequestBody EmployeePayrollDTO employeePayrollDTO) {
        return new EmployeePayrollData(1L, employeePayrollDTO.name, employeePayrollDTO.salary);
    }

    /**
     * DELETE employee by ID
     * curl -X DELETE localhost:8080/employeepayrollservice/delete/1 -w "\n"
     */
    @DeleteMapping("/delete/{id}")
    public String deleteEmployeePayrollData(@PathVariable long id) {
        return "Deleted Employee Payroll Data for ID: " + id;
    }
}
