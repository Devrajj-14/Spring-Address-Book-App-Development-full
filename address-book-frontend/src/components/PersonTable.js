import React from 'react';
import './PersonTable.css';

const PersonTable = ({ persons, onDelete, onEdit }) => {
  return (
    <div className="table-wrapper">
      <table className="person-table">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {persons.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-row">
                No persons found. Click "+ Add Person" to add one.
              </td>
            </tr>
          ) : (
            persons.map((person) => (
              <tr key={person.id} className="person-row">
                <td className="col-name">{person.fullName}</td>
                <td className="col-address">{person.address}</td>
                <td className="col-city">{person.city}</td>
                <td className="col-state">{person.state}</td>
                <td className="col-zip">{person.zipCode}</td>
                <td className="col-phone">{person.phoneNumber}</td>
                <td className="col-actions">
                  <button
                    className="action-btn delete-btn"
                    onClick={() => onDelete(person.id)}
                    title="Delete"
                    aria-label={`Delete ${person.fullName}`}
                  >
                    {/* Trash icon */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                    </svg>
                  </button>
                  <button
                    className="action-btn edit-btn"
                    onClick={() => onEdit(person)}
                    title="Edit"
                    aria-label={`Edit ${person.fullName}`}
                  >
                    {/* Pencil icon */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PersonTable;
