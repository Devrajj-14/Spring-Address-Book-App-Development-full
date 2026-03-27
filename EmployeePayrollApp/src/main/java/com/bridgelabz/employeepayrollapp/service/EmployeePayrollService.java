package com.bridgelabz.employeepayrollapp.service;

import com.bridgelabz.employeepayrollapp.dto.EmployeePayrollDTO;
import com.bridgelabz.employeepayrollapp.model.EmployeePayrollData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * UC4: Employee Payroll Service Implementation
 * Implements IEmployeePayrollService.
 * Logic is moved from controller here. In-memory list storage added in UC5.
 */
@Service
public class EmployeePayrollService implements IEmployeePayrollService {

    @Override
    public List<EmployeePayrollData> getEmployeePayrollData() {
        // Placeholder — actual list storage comes in UC5
        List<EmployeePayrollData> list = new ArrayList<>();
        list.add(new EmployeePayrollData(1L, "Sample Employee", 5000.0));
        return list;
    }

    @Override
    public EmployeePayrollData getEmployeePayrollDataById(long id) {
        return new EmployeePayrollData(id, "Employee-" + id, 3000.0);
    }

    @Override
    public EmployeePayrollData createEmployeePayrollData(EmployeePayrollDTO employeePayrollDTO) {
        return new EmployeePayrollData(1L, employeePayrollDTO.name, employeePayrollDTO.salary);
    }

    @Override
    public EmployeePayrollData updateEmployeePayrollData(EmployeePayrollDTO employeePayrollDTO) {
        return new EmployeePayrollData(1L, employeePayrollDTO.name, employeePayrollDTO.salary);
    }

    @Override
    public void deleteEmployeePayrollData(long id) {
        // Deletion logic will be backed by local list in UC5
        System.out.println("Deleted employee with ID: " + id);
    }
}
