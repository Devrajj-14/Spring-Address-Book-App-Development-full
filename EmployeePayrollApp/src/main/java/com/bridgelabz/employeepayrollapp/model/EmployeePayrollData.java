package com.bridgelabz.employeepayrollapp.model;

/**
 * UC3: Employee Payroll Model / Entity
 * Represents the Employee Payroll data stored in the system.
 * Fields: id, fullName, address, city, state, zipCode, phoneNumber
 */
public class EmployeePayrollData {

    public long id;
    public String fullName;
    public String address;
    public String city;
    public String state;
    public String zipCode;
    public String phoneNumber;

    public EmployeePayrollData() {
    }

    public EmployeePayrollData(long id, String fullName, String address, String city, String state, String zipCode, String phoneNumber) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "EmployeePayrollData{id=" + id + ", fullName='" + fullName + "', address='" + address + 
               "', city='" + city + "', state='" + state + "', zipCode='" + zipCode + 
               "', phoneNumber='" + phoneNumber + "'}";
    }
}
