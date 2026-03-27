# Employee Payroll App — Spring Boot REST Application

## Project Summary

A Spring Boot REST API project implementing Employee Payroll management. Built incrementally through 5 Use Cases (UCs) using strict Git Flow branching, covering project setup, REST controller, DTO/Model separation, service layer abstraction, and in-memory local list storage.

---

## Tech Stack

| Technology | Version |
|---|---|
| Java | 17+ |
| Spring Boot | 3.2.3 |
| Spring Web | Included |
| Spring Data JPA | Included |
| Validation | Included |
| MySQL Driver | Included |
| DevTools | Included |
| Maven | 3.x |

---

## Package Structure

```
EmployeePayrollApp/
└── src/main/java/com/bridgelabz/employeepayrollapp/
    ├── controller/
    │   └── EmployeePayrollController.java
    ├── dto/
    │   └── EmployeePayrollDTO.java
    ├── model/
    │   └── EmployeePayrollData.java
    ├── service/
    │   ├── IEmployeePayrollService.java
    │   └── EmployeePayrollService.java
    └── EmployeePayrollAppApplication.java
```

---

## Implemented Use Cases

| UC | Branch | Description |
|---|---|---|
| UC1 | `feature/UC1-EmployeePayroll-Project-Setup` | Spring Boot project setup with pom.xml and Maven wrapper |
| UC2 | `feature/UC2-EmployeePayroll-RestController` | REST Controller with all 5 HTTP endpoints |
| UC3 | `feature/UC3-EmployeePayroll-DTO-Model` | DTO and Model classes introduced |
| UC4 | `feature/UC4-EmployeePayroll-Service-Layer` | Service interface and implementation with @Autowired |
| UC5 | `feature/UC5-EmployeePayroll-Local-List` | In-memory ArrayList storage with AtomicLong ID |

---

## REST Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/employeepayrollservice/` | Get all employees |
| GET | `/employeepayrollservice/get/{id}` | Get employee by ID |
| POST | `/employeepayrollservice/create` | Create new employee |
| PUT | `/employeepayrollservice/update` | Update employee |
| DELETE | `/employeepayrollservice/delete/{id}` | Delete employee by ID |

---

## CURL Commands

```bash
# GET all employees
curl localhost:8080/employeepayrollservice/ -w "\n"

# GET employee by ID
curl localhost:8080/employeepayrollservice/get/1 -w "\n"

# POST — create new employee
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Lisa","salary":2000}' \
  "http://localhost:8080/employeepayrollservice/create" -w "\n"

# PUT — update employee
curl -X PUT -H "Content-Type: application/json" \
  -d '{"name":"Lisa","salary":2000}' \
  "http://localhost:8080/employeepayrollservice/update" -w "\n"

# DELETE — delete employee by ID
curl -X DELETE localhost:8080/employeepayrollservice/delete/1 -w "\n"
```

---

## Branch Strategy

Git Flow was used strictly for every UC:

```
git checkout develop
git flow feature start <feature-name>
# ... implement UC ...
git commit -m "[Devraj]: progress on <UC>"
git commit -m "[Devraj]: complete <UC>"
git flow feature finish -k <feature-name>
git push origin develop
git push origin feature/<feature-name>
```

All feature branches are **retained** (`-k` flag) for full history review.

---

## Service Layer

The service layer (`IEmployeePayrollService` + `EmployeePayrollService`) decouples business logic from the REST controller. The controller only handles HTTP concerns; all data operations are delegated to the service via `@Autowired`.

---

## Local List Storage

`EmployeePayrollService` stores all employee data in an `ArrayList<EmployeePayrollData>` in memory. An `AtomicLong` counter auto-generates unique IDs for each new employee. This approach avoids database dependency for early-stage development.

---

## How to Run

```bash
# Navigate to the project folder
cd EmployeePayrollApp

# Run the application
./mvnw spring-boot:run     # Linux/Mac
mvnw.cmd spring-boot:run   # Windows
```

The app starts on port `8080`. No database required — uses in-memory list storage.

---

*Author: Devraj | Repository: Spring Address Book App Development*
