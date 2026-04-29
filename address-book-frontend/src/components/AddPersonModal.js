import React, { useState, useEffect } from 'react';
import './AddPersonModal.css';

const emptyForm = {
  fullName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  phoneNumber: '',
};

const AddPersonModal = ({ onClose, onSave, editData }) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // Pre-fill form when editing
  useEffect(() => {
    if (editData) {
      setForm({
        fullName: editData.fullName || '',
        address: editData.address || '',
        city: editData.city || '',
        state: editData.state || '',
        zipCode: editData.zipCode || '',
        phoneNumber: editData.phoneNumber || '',
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.state.trim()) newErrors.state = 'State is required';
    if (!form.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    else if (!/^\d{5,6}$/.test(form.zipCode.trim()))
      newErrors.zipCode = 'Enter a valid zip code';
    if (!form.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d{10,12}$/.test(form.phoneNumber.trim()))
      newErrors.phoneNumber = 'Enter a valid phone number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave(form);
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-box">
        <div className="modal-header">
          <h3 id="modal-title" className="modal-title">
            {editData ? 'Edit Person' : 'Add New Person'}
          </h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="e.g. Varaza Mishra"
                className={errors.fullName ? 'input-error' : ''}
              />
              {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. 02228017752"
                className={errors.phoneNumber ? 'input-error' : ''}
              />
              {errors.phoneNumber && <span className="error-msg">{errors.phoneNumber}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Address *</label>
            <input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              placeholder="e.g. Marve Road, Next To Maniratra, Malad (west)"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && <span className="error-msg">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                placeholder="e.g. Mumbai"
                className={errors.city ? 'input-error' : ''}
              />
              {errors.city && <span className="error-msg">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                id="state"
                name="state"
                type="text"
                value={form.state}
                onChange={handleChange}
                placeholder="e.g. Maharashtra"
                className={errors.state ? 'input-error' : ''}
              />
              {errors.state && <span className="error-msg">{errors.state}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Zip Code *</label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                value={form.zipCode}
                onChange={handleChange}
                placeholder="e.g. 400064"
                className={errors.zipCode ? 'input-error' : ''}
              />
              {errors.zipCode && <span className="error-msg">{errors.zipCode}</span>}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {editData ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPersonModal;
