package com.bridgelabz.employeepayrollapp.controller;

import org.springframework.web.bind.annotation.*;

/**
 * UC2: Employee Payroll REST Controller
 * Demonstrates all HTTP methods (GET, POST, PUT, DELETE)
 * for the Employee Payroll Service endpoints.
 */
@RestController
@RequestMapping("/employeepayrollservice")
public class EmployeePayrollController {

    /**
     * GET all employees
     * curl localhost:8080/employeepayrollservice/ -w "\n"
     */
    @GetMapping("/")
    public String getEmployeePayrollData() {
        return "Welcome to Employee Payroll Service!";
    }

    /**
     * GET employee by ID
     * curl localhost:8080/employeepayrollservice/get/1 -w "\n"
     */
    @GetMapping("/get/{id}")
    public String getEmployeePayrollDataById(@PathVariable long id) {
        return "Getting Employee Payroll Data for ID: " + id;
    }

    /**
     * POST create new employee
     * curl -X POST -H "Content-Type: application/json"
     *      -d '{"name":"Lisa","salary":2000}'
     *      "http://localhost:8080/employeepayrollservice/create" -w "\n"
     */
    @PostMapping("/create")
    public String addEmployeePayrollData(@RequestBody String createDTO) {
        return "POST Request to Add Employee Payroll Data: " + createDTO;
    }

    /**
     * PUT update employee
     * curl -X PUT -H "Content-Type: application/json"
     *      -d '{"name":"Lisa","salary":2000}'
     *      "http://localhost:8080/employeepayrollservice/update" -w "\n"
     */
    @PutMapping("/update")
    public String updateEmployeePayrollData(@RequestBody String updateDTO) {
        return "PUT Request to Update Employee Payroll Data: " + updateDTO;
    }

    /**
     * DELETE employee by ID
     * curl -X DELETE localhost:8080/employeepayrollservice/delete/1 -w "\n"
     */
    @DeleteMapping("/delete/{id}")
    public String deleteEmployeePayrollData(@PathVariable long id) {
        return "DELETE Request to Delete Employee Payroll Data for ID: " + id;
    }
}
