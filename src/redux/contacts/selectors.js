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
    const trimmedName = name.trim().toLowerCase();
    const trimmedNumber = number.trim();
    if (trimmedName) {
      return contacts.filter((contact) => contact.name.toLowerCase().includes(trimmedName));
    }
    if (trimmedNumber) {
      return contacts.filter((contact) => contact.number.includes(trimmedNumber));
    }
    return contacts;
  }
);
