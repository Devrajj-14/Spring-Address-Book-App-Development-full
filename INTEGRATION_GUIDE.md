# Frontend-Backend Integration Guide

## Overview
This project now has a fully integrated React frontend and Spring Boot backend for the Employee Payroll / Address Book application.

## Architecture

### Backend (Spring Boot)
- **Location**: `EmployeePayrollApp/`
- **Port**: 8080
- **Technology**: Spring Boot 3.2.3, Java 17+
- **Storage**: In-memory ArrayList (no database required)
- **CORS**: Enabled for `http://localhost:3000`

### Frontend (React)
- **Location**: `address-book-frontend/`
- **Port**: 3000
- **Technology**: React 19, Axios for HTTP requests
- **API Service**: `src/services/api.js`

## Changes Made

### Backend Changes

1. **Updated Data Model** (`EmployeePayrollData.java`):
   - Changed from simple payroll (name, salary) to address book format
   - Fields: `id`, `fullName`, `address`, `city`, `state`, `zipCode`, `phoneNumber`

2. **Updated DTO** (`EmployeePayrollDTO.java`):
   - Matches the new data model structure

3. **Added CORS Support** (`EmployeePayrollController.java`):
   - Added `@CrossOrigin(origins = "http://localhost:3000")` annotation
   - Allows React frontend to make API calls

4. **Updated API Endpoints**:
   - `PUT /update/{id}` - Now accepts ID as path variable for proper updates

### Frontend Changes

1. **Added Axios Dependency** (`package.json`):
   - Added `axios: ^1.6.7` for HTTP requests

2. **Created API Service** (`src/services/api.js`):
   - Centralized API calls
   - Functions: `getAllPersons()`, `getPersonById()`, `createPerson()`, `updatePerson()`, `deletePerson()`

3. **Updated AddressBook Component** (`src/components/AddressBook.js`):
   - Removed hardcoded data
   - Added `useEffect` to fetch data on mount
   - Integrated all CRUD operations with backend API
   - Added loading and error states
   - Added user-friendly error messages

## How to Run

### 1. Start the Backend

```bash
cd EmployeePayrollApp
./mvnw spring-boot:run     # Mac/Linux
# OR
mvnw.cmd spring-boot:run   # Windows
```

The backend will start on `http://localhost:8080`

### 2. Start the Frontend

Open a new terminal:

```bash
cd address-book-frontend
npm install                 # First time only
npm start
```

The frontend will start on `http://localhost:3000`

### 3. Access the Application

Open your browser and navigate to: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employeepayrollservice/` | Get all persons |
| GET | `/employeepayrollservice/get/{id}` | Get person by ID |
| POST | `/employeepayrollservice/create` | Create new person |
| PUT | `/employeepayrollservice/update/{id}` | Update person by ID |
| DELETE | `/employeepayrollservice/delete/{id}` | Delete person by ID |

## Testing the Integration

### Using the UI
1. Start both backend and frontend
2. Open `http://localhost:3000`
3. Click "Add Person" to create a new entry
4. Use edit/delete icons to modify or remove entries
5. All changes are persisted in the backend (in-memory)

### Using cURL

```bash
# Get all persons
curl http://localhost:8080/employeepayrollservice/ -w "\n"

# Create a person
curl -X POST -H "Content-Type: application/json" \
  -d '{"fullName":"John Doe","address":"123 Main St","city":"Mumbai","state":"Maharashtra","zipCode":"400001","phoneNumber":"9876543210"}' \
  http://localhost:8080/employeepayrollservice/create -w "\n"

# Update a person
curl -X PUT -H "Content-Type: application/json" \
  -d '{"fullName":"John Doe Updated","address":"456 New St","city":"Mumbai","state":"Maharashtra","zipCode":"400002","phoneNumber":"9876543211"}' \
  http://localhost:8080/employeepayrollservice/update/1 -w "\n"

# Delete a person
curl -X DELETE http://localhost:8080/employeepayrollservice/delete/1 -w "\n"
```

## Troubleshooting

### Frontend shows "Failed to load persons"
- Make sure the backend is running on port 8080
- Check browser console for CORS errors
- Verify the backend URL in `src/services/api.js`

### CORS Errors
- Ensure `@CrossOrigin` annotation is present in the controller
- Verify the origin matches `http://localhost:3000`

### Port Already in Use
- Backend: Change port in `application.properties`
- Frontend: Set `PORT=3001` environment variable before `npm start`

## Data Persistence

**Note**: The backend uses in-memory storage (ArrayList). All data will be lost when the backend restarts. To persist data:
1. Add a database (MySQL, PostgreSQL, etc.)
2. Update `pom.xml` with database dependencies
3. Configure `application.properties` with database connection
4. Add JPA annotations to `EmployeePayrollData` model

## Future Enhancements

- [ ] Add database persistence (MySQL/PostgreSQL)
- [ ] Add input validation on backend
- [ ] Add pagination for large datasets
- [ ] Add search/filter functionality
- [ ] Add authentication and authorization
- [ ] Deploy to cloud (AWS, Azure, Heroku)
- [ ] Add unit and integration tests

## Author
Devraj - Full Stack Integration
