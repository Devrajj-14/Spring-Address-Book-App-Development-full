package com.bridgelabz.employeepayrollapp.dto;

/**
 * UC3: Employee Payroll DTO (Data Transfer Object)
 * Carries request data from client to the controller.
 * Fields: fullName, address, city, state, zipCode, phoneNumber
 */
public class EmployeePayrollDTO {

    public String fullName;
    public String address;
    public String city;
    public String state;
    public String zipCode;
    public String phoneNumber;

    public EmployeePayrollDTO() {
    }

    public EmployeePayrollDTO(String fullName, String address, String city, String state, String zipCode, String phoneNumber) {
        this.fullName = fullName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "EmployeePayrollDTO{fullName='" + fullName + "', address='" + address + 
               "', city='" + city + "', state='" + state + "', zipCode='" + zipCode + 
               "', phoneNumber='" + phoneNumber + "'}";
    }
}
