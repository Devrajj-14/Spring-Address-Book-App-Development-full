package com.bridgelabz.employeepayrollapp.service;

import com.bridgelabz.employeepayrollapp.dto.EmployeePayrollDTO;
import com.bridgelabz.employeepayrollapp.model.EmployeePayrollData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 * UC5: Employee Payroll Service — Local In-Memory List Storage
 * Stores all employee payroll data in a local ArrayList.
 * Uses AtomicLong for thread-safe auto-increment ID generation.
 */
@Service
public class EmployeePayrollService implements IEmployeePayrollService {

    // In-memory storage list
    private final List<EmployeePayrollData> employeePayrollList = new ArrayList<>();

    // Auto-increment ID generator
    private final AtomicLong idCounter = new AtomicLong(1);

    /**
     * GET all employee payroll data from local list
     */
    @Override
    public List<EmployeePayrollData> getEmployeePayrollData() {
        return employeePayrollList;
    }

    /**
     * GET employee payroll data by ID from local list
     */
    @Override
    public EmployeePayrollData getEmployeePayrollDataById(long id) {
        return employeePayrollList.stream()
                .filter(emp -> emp.id == id)
                .findFirst()
                .orElse(null);
    }

    /**
     * CREATE new employee payroll data and add to local list
     */
    @Override
    public EmployeePayrollData createEmployeePayrollData(EmployeePayrollDTO employeePayrollDTO) {
        long newId = idCounter.getAndIncrement();
        EmployeePayrollData newEmployee = new EmployeePayrollData(
                newId,
                employeePayrollDTO.fullName,
                employeePayrollDTO.address,
                employeePayrollDTO.city,
                employeePayrollDTO.state,
                employeePayrollDTO.zipCode,
                employeePayrollDTO.phoneNumber
        );
        employeePayrollList.add(newEmployee);
        return newEmployee;
    }

    /**
     * UPDATE employee payroll data in local list (updates by ID)
     */
    @Override
    public EmployeePayrollData updateEmployeePayrollData(long id, EmployeePayrollDTO employeePayrollDTO) {
        EmployeePayrollData employee = employeePayrollList.stream()
                .filter(emp -> emp.id == id)
                .findFirst()
                .orElse(null);
        
        if (employee != null) {
            employee.fullName = employeePayrollDTO.fullName;
            employee.address = employeePayrollDTO.address;
            employee.city = employeePayrollDTO.city;
            employee.state = employeePayrollDTO.state;
            employee.zipCode = employeePayrollDTO.zipCode;
            employee.phoneNumber = employeePayrollDTO.phoneNumber;
            return employee;
        }
        return null;
    }

    /**
     * DELETE employee payroll data by ID from local list
     */
    @Override
    public void deleteEmployeePayrollData(long id) {
        employeePayrollList.removeIf(emp -> emp.id == id);
    }
}
