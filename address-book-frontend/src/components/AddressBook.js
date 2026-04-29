import React, { useState } from 'react';
import Header from './Header';
import PersonTable from './PersonTable';
import AddPersonModal from './AddPersonModal';
import './AddressBook.css';

// Sample data matching the screenshot
const initialPersons = [
  {
    id: 1,
    fullName: 'Varaza Mishra',
    address: 'Marve Road, Next To Maniratra, Malad (west)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400064',
    phoneNumber: '02228017752',
  },
  {
    id: 2,
    fullName: 'Trishna Bhalla',
    address: '77 3rd Flr., Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400003',
    phoneNumber: '02223420607',
  },
  {
    id: 3,
    fullName: 'Anish Kaskar',
    address: '473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400705',
    phoneNumber: '02227893390',
  },
  {
    id: 4,
    fullName: 'Varaza Mishra',
    address: 'Marve Road, Next To Maniratra, Malad (west)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400064',
    phoneNumber: '02228017752',
  },
  {
    id: 5,
    fullName: 'Trishna Bhalla',
    address: '77 3rd Flr., Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400003',
    phoneNumber: '02223420607',
  },
  {
    id: 6,
    fullName: 'Anish Kaskar',
    address: '473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400705',
    phoneNumber: '02227893390',
  },
  {
    id: 7,
    fullName: 'Varaza Mishra',
    address: 'Marve Road, Next To Maniratra, Malad (west)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400064',
    phoneNumber: '02228017752',
  },
  {
    id: 8,
    fullName: 'Trishna Bhalla',
    address: '77 3rd Flr., Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400003',
    phoneNumber: '02223420607',
  },
  {
    id: 9,
    fullName: 'Anish Kaskar',
    address: '473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400705',
    phoneNumber: '02227893390',
  },
  {
    id: 10,
    fullName: 'Varaza Mishra',
    address: '144, Persipolis Bldg., Sec., Vashi, Navi Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400705',
    phoneNumber: '02227893390',
  },
];

const AddressBook = () => {
  const [persons, setPersons] = useState(initialPersons);
  const [showModal, setShowModal] = useState(false);
  const [editPerson, setEditPerson] = useState(null);
  const [nextId, setNextId] = useState(11);

  const handleAddPerson = (personData) => {
    if (editPerson) {
      // Update existing person
      setPersons((prev) =>
        prev.map((p) => (p.id === editPerson.id ? { ...personData, id: editPerson.id } : p))
      );
      setEditPerson(null);
    } else {
      // Add new person
      setPersons((prev) => [...prev, { ...personData, id: nextId }]);
      setNextId((prev) => prev + 1);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setPersons((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (person) => {
    setEditPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditPerson(null);
  };

  return (
    <div className="address-book-container">
      <Header />
      <main className="main-content">
        <div className="card">
          <div className="card-header">
            <h2 className="section-title">Person Details</h2>
            <button className="btn-add" onClick={() => setShowModal(true)}>
              <span className="btn-icon">+</span> Add Person
            </button>
          </div>
          <PersonTable
            persons={persons}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </main>

      {showModal && (
        <AddPersonModal
          onClose={handleCloseModal}
          onSave={handleAddPerson}
          editData={editPerson}
        />
      )}
    </div>
  );
};

export default AddressBook;
