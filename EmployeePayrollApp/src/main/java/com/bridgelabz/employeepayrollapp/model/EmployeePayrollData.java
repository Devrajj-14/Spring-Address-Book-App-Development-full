package com.bridgelabz.employeepayrollapp.model;

/**
 * UC3: Employee Payroll Model / Entity
 * Represents the Employee Payroll data stored in the system.
 * Fields: id, name, salary
 */
public class EmployeePayrollData {

    public long id;
    public String name;
    public double salary;

    public EmployeePayrollData() {
    }

    public EmployeePayrollData(long id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "EmployeePayrollData{id=" + id + ", name='" + name + "', salary=" + salary + "}";
    }
}
