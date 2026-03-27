package com.bridgelabz.employeepayrollapp.controller;

import com.bridgelabz.employeepayrollapp.dto.EmployeePayrollDTO;
import com.bridgelabz.employeepayrollapp.model.EmployeePayrollData;
import com.bridgelabz.employeepayrollapp.service.IEmployeePayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * UC4: Employee Payroll REST Controller (Refactored with Service Layer)
 * Controller delegates all business logic to IEmployeePayrollService via @Autowired.
 */
@RestController
@RequestMapping("/employeepayrollservice")
public class EmployeePayrollController {

    @Autowired
    private IEmployeePayrollService employeePayrollService;

    /**
     * GET all employees
     * curl localhost:8080/employeepayrollservice/ -w "\n"
     */
    @GetMapping("/")
    public List<EmployeePayrollData> getEmployeePayrollData() {
        return employeePayrollService.getEmployeePayrollData();
    }

    /**
     * GET employee by ID
     * curl localhost:8080/employeepayrollservice/get/1 -w "\n"
     */
    @GetMapping("/get/{id}")
    public EmployeePayrollData getEmployeePayrollDataById(@PathVariable long id) {
        return employeePayrollService.getEmployeePayrollDataById(id);
    }

    /**
     * POST create new employee
     * curl -X POST -H "Content-Type: application/json"
     *      -d '{"name":"Lisa","salary":2000}'
     *      "http://localhost:8080/employeepayrollservice/create" -w "\n"
     */
    @PostMapping("/create")
    public EmployeePayrollData addEmployeePayrollData(@RequestBody EmployeePayrollDTO employeePayrollDTO) {
        return employeePayrollService.createEmployeePayrollData(employeePayrollDTO);
    }

    /**
     * PUT update employee
     * curl -X PUT -H "Content-Type: application/json"
     *      -d '{"name":"Lisa","salary":2000}'
     *      "http://localhost:8080/employeepayrollservice/update" -w "\n"
     */
    @PutMapping("/update")
    public EmployeePayrollData updateEmployeePayrollData(@RequestBody EmployeePayrollDTO employeePayrollDTO) {
        return employeePayrollService.updateEmployeePayrollData(employeePayrollDTO);
    }

    /**
     * DELETE employee by ID
     * curl -X DELETE localhost:8080/employeepayrollservice/delete/1 -w "\n"
     */
    @DeleteMapping("/delete/{id}")
    public String deleteEmployeePayrollData(@PathVariable long id) {
        employeePayrollService.deleteEmployeePayrollData(id);
        return "Deleted Employee Payroll Data for ID: " + id;
    }
}
