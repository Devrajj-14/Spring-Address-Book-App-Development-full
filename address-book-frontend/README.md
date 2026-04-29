# Address Book - React Frontend

A React.js frontend for the Address Book application, matching the Adobe XD design mockup.

## Features

- View all persons in a clean table layout (Fullname, Address, City, State, Zip Code, Phone Number)
- Add new person via modal form with validation
- Edit existing person details
- Delete a person from the list
- Responsive design

## Tech Stack

- React.js (Create React App)
- CSS Modules (component-scoped styles)
- No external UI library — pure custom CSS

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Backend Integration

The Spring Boot backend runs on `http://localhost:8080`.  
API base: `/employeepayrollservice`

To connect the frontend to the live backend, update the API calls in `AddressBook.js` to use `fetch` or `axios` against the backend endpoints.

## Project Structure

```
src/
├── components/
│   ├── AddressBook.js       # Main container with state management
│   ├── AddressBook.css
│   ├── Header.js            # Top navigation bar with logo
│   ├── Header.css
│   ├── PersonTable.js       # Table listing all persons
│   ├── PersonTable.css
│   ├── AddPersonModal.js    # Add/Edit modal form
│   └── AddPersonModal.css
├── App.js
├── App.css
├── index.js
└── index.css
```
