package com.bridgelabz.employeepayrollapp.dto;

/**
 * UC3: Employee Payroll DTO (Data Transfer Object)
 * Carries request data from client to the controller.
 * Fields: name, salary
 */
public class EmployeePayrollDTO {

    public String name;
    public double salary;

    public EmployeePayrollDTO() {
    }

    public EmployeePayrollDTO(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "EmployeePayrollDTO{name='" + name + "', salary=" + salary + "}";
    }
}
