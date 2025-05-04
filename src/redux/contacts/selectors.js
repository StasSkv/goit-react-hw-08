import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    const { name = '', number = '' } = filter;
    const filterValue = (name || number).toLowerCase().trim();
    const searchField = name ? 'name' : 'number';
    return contacts.filter((contact) => {
      return contact[searchField].toLowerCase().includes(filterValue);
    });
  }
);
