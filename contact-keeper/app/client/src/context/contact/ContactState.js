import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Harry Potter',
        email: 'hp@hogwarts.net',
        phone: '555-555-5555',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Serious Black',
        email: 'sb@hogwarts.net',
        phone: '555-555-5555',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Albus Dumbledore',
        email: 'ad@hogwarts.net',
        phone: '555-555-5555',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Update Contact

  // Set Current Contact

  // Clear Current Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
