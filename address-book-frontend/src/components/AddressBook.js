import React, { useState, useEffect } from 'react';
import Header from './Header';
import PersonTable from './PersonTable';
import AddPersonModal from './AddPersonModal';
import './AddressBook.css';
import { getAllPersons, createPerson, updatePerson, deletePerson } from '../services/api';

const AddressBook = () => {
  const [persons, setPersons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPerson, setEditPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch persons from backend on component mount
  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllPersons();
      setPersons(data);
    } catch (err) {
      setError('Failed to load persons. Make sure the backend is running on port 8080.');
      console.error('Error fetching persons:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPerson = async (personData) => {
    try {
      if (editPerson) {
        // Update existing person
        const updatedPerson = await updatePerson(editPerson.id, personData);
        setPersons((prev) =>
          prev.map((p) => (p.id === editPerson.id ? updatedPerson : p))
        );
        setEditPerson(null);
      } else {
        // Add new person
        const newPerson = await createPerson(personData);
        setPersons((prev) => [...prev, newPerson]);
      }
      setShowModal(false);
    } catch (err) {
      alert('Failed to save person. Please try again.');
      console.error('Error saving person:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      try {
        await deletePerson(id);
        setPersons((prev) => prev.filter((p) => p.id !== id));
      } catch (err) {
        alert('Failed to delete person. Please try again.');
        console.error('Error deleting person:', err);
      }
    }
  };

  const handleEdit = (person) => {
    setEditPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditPerson(null);
  };

  if (loading) {
    return (
      <div className="address-book-container">
        <Header />
        <main className="main-content">
          <div className="card">
            <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="address-book-container">
      <Header />
      <main className="main-content">
        {error && (
          <div style={{ 
            backgroundColor: '#fee', 
            color: '#c33', 
            padding: '10px', 
            marginBottom: '10px', 
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
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
